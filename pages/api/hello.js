export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' })
}

// 'req' es una instancia de http.IncomingMessage , más algunos middlewares prediseñados .
// 'res' es una instancia de http.ServerResponse , más algunas funciones auxiliares .