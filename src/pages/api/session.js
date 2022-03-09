export default async (req, res) => {
    console.log(req);
    const user = req.session.get("user");
    res.json({data: user});
  }