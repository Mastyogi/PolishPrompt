import server from "../dist/server/index.mjs";

export default async (req, res) => {
  try {
    // Build the full URL
    const protocol = req.headers["x-forwarded-proto"] || "https";
    const host = req.headers["x-forwarded-host"] || req.headers.host || "localhost";
    const url = new URL(`${protocol}://${host}${req.url}`);

    // Prepare body for Web API Request
    let body = undefined;
    if (req.method !== "GET" && req.method !== "HEAD") {
      if (req.body) {
        // If body is a string or Buffer
        if (typeof req.body === "string") {
          body = req.body;
        } else if (Buffer.isBuffer(req.body)) {
          body = req.body;
        } else if (typeof req.body === "object") {
          body = JSON.stringify(req.body);
        }
      }
    }

    // Create Web API Request
    const request = new Request(url.toString(), {
      method: req.method,
      headers: req.headers,
      body: body,
    });

    // Call the server's fetch handler
    const response = await server.fetch(request, {}, {});

    // Copy headers to response
    response.headers.forEach((value, name) => {
      res.setHeader(name, value);
    });

    // Set status code
    res.status(response.status);

    // Stream response body
    if (response.body) {
      const reader = response.body.getReader();
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          res.write(Buffer.from(value));
        }
      } finally {
        reader.releaseLock();
      }
    }

    res.end();
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Internal Server Error", message: error.message });
  }
};
