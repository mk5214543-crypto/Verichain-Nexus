export default function Contact() {
  return (
    <section className="py-20 px-6 md:px-20 ">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
      <form className="max-w-xl mx-auto flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="p-3 rounded bg-gray-700" />
        <input type="email" placeholder="Your Email" className="p-3 rounded bg-gray-700" />
        <textarea placeholder="Message" className="p-3 rounded bg-gray-700"></textarea>
        <button type="submit" className="bg-orange-500 px-4 py-2 rounded hover:bg-orange-600">Send</button>
      </form>
    </section>
  );
}