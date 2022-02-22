export default async function data(req, res) {
  try {
    if (Math.random() > 0.5) throw new Error("Can't get data");

    res.status(200).json({ worked: true });
  } catch (error) {
    res.status(500).json({ message: (error as any).message });
  }
}
