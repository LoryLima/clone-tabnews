function status(request, response) {
  response.status(200).json({ chave: "como estão sendo tratados" });
}

export default status;
