export default function ShowSchedule() {
  return (
    <main className="h-full overflow-y-auto bg-gray-50">
      <div className="container grid px-6 mx-auto pb-7">
        <div className="my-6 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-700">
            {`Tabel ${localStorage.getItem("title")}`}
          </h2>
        </div>
        <div className="w-full overflow-hidden rounded-lg shadow-lg bg-white">
          <div className="w-full overflow-x-auto bg-white p-4 space-y-6">
            <div className="flex items-center gap-6">
              <p className="w-60">Sunday, 23-06-2024</p>
              <form className="flex items-center gap-6 my-auto">
                <select className="w-56 border-2 py-2 px-2 rounded-lg">
                  <option value="Libur">Libur</option>
                  <option value="Pagi">Pagi</option>
                  <option value="Siang">Siang</option>
                  <option value="Full Time">Full Time</option>
                </select>
                <button className="px-4 py-2 inline-block text-sm font-medium text-white transition-colors duration-150 bg-orange-600 border border-transparent rounded-lg active:bg-orange-600 hover:bg-orange-700 focus:outline-none focus:shadow-outline-orange">
                  Edit
                </button>
              </form>
            </div>
            <div className="flex items-center gap-6">
              <p className="w-60">Monday, 24-06-2024</p>
              <form className="flex items-center gap-6 my-auto">
                <select className="w-56 border-2 py-2 px-2 rounded-lg">
                  <option value="Libur">Libur</option>
                  <option value="Pagi">Pagi</option>
                  <option value="Siang">Siang</option>
                  <option value="Full Time">Full Time</option>
                </select>
                <button className="px-4 py-2 inline-block text-sm font-medium text-white transition-colors duration-150 bg-orange-600 border border-transparent rounded-lg active:bg-orange-600 hover:bg-orange-700 focus:outline-none focus:shadow-outline-orange">
                  Edit
                </button>
              </form>
            </div>
            <div className="flex items-center gap-6">
              <p className="w-60">Tuesday, 25-06-2024</p>
              <form className="flex items-center gap-6 my-auto">
                <select className="w-56 border-2 py-2 px-2 rounded-lg">
                  <option value="Libur">Libur</option>
                  <option value="Pagi">Pagi</option>
                  <option value="Siang">Siang</option>
                  <option value="Full Time">Full Time</option>
                </select>
                <button className="px-4 py-2 inline-block text-sm font-medium text-white transition-colors duration-150 bg-orange-600 border border-transparent rounded-lg active:bg-orange-600 hover:bg-orange-700 focus:outline-none focus:shadow-outline-orange">
                  Edit
                </button>
              </form>
            </div>
            <div className="flex items-center gap-6">
              <p className="w-60">Wednesday, 26-06-2024</p>
              <form className="flex items-center gap-6 my-auto">
                <select className="w-56 border-2 py-2 px-2 rounded-lg">
                  <option value="Libur">Libur</option>
                  <option value="Pagi">Pagi</option>
                  <option value="Siang">Siang</option>
                  <option value="Full Time">Full Time</option>
                </select>
                <button className="px-4 py-2 inline-block text-sm font-medium text-white transition-colors duration-150 bg-orange-600 border border-transparent rounded-lg active:bg-orange-600 hover:bg-orange-700 focus:outline-none focus:shadow-outline-orange">
                  Edit
                </button>
              </form>
            </div>
            <div className="flex items-center gap-6">
              <p className="w-60">Thursday, 27-06-2024</p>
              <form className="flex items-center gap-6 my-auto">
                <select className="w-56 border-2 py-2 px-2 rounded-lg">
                  <option value="Libur">Libur</option>
                  <option value="Pagi">Pagi</option>
                  <option value="Siang">Siang</option>
                  <option value="Full Time">Full Time</option>
                </select>
                <button className="px-4 py-2 inline-block text-sm font-medium text-white transition-colors duration-150 bg-orange-600 border border-transparent rounded-lg active:bg-orange-600 hover:bg-orange-700 focus:outline-none focus:shadow-outline-orange">
                  Edit
                </button>
              </form>
            </div>
            <div className="flex items-center gap-6">
              <p className="w-60">Friday, 28-06-2024</p>
              <form className="flex items-center gap-6 my-auto">
                <select className="w-56 border-2 py-2 px-2 rounded-lg">
                  <option value="Libur">Libur</option>
                  <option value="Pagi">Pagi</option>
                  <option value="Siang">Siang</option>
                  <option value="Full Time">Full Time</option>
                </select>
                <button className="px-4 py-2 inline-block text-sm font-medium text-white transition-colors duration-150 bg-orange-600 border border-transparent rounded-lg active:bg-orange-600 hover:bg-orange-700 focus:outline-none focus:shadow-outline-orange">
                  Edit
                </button>
              </form>
            </div>
            <div className="flex items-center gap-6">
              <p className="w-60">Saturday, 29-06-2024</p>
              <form className="flex items-center gap-6 my-auto">
                <select className="w-56 border-2 py-2 px-2 rounded-lg">
                  <option value="Libur">Libur</option>
                  <option value="Pagi">Pagi</option>
                  <option value="Siang">Siang</option>
                  <option value="Full Time">Full Time</option>
                </select>
                <button className="px-4 py-2 inline-block text-sm font-medium text-white transition-colors duration-150 bg-orange-600 border border-transparent rounded-lg active:bg-orange-600 hover:bg-orange-700 focus:outline-none focus:shadow-outline-orange">
                  Edit
                </button>
                <button className="px-4 py-2 block text-sm font-medium text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-lg active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-red">
                  Hapus
                </button>
              </form>
            </div>
            <div className="flex items-center gap-6">
              <p className="w-60">Sunday, 30-06-2024</p>
              <form className="flex items-center gap-6 my-auto">
                <select className="w-56 border-2 py-2 px-2 rounded-lg">
                  <option value="Libur">Libur</option>
                  <option value="Pagi">Pagi</option>
                  <option value="Siang">Siang</option>
                  <option value="Full Time">Full Time</option>
                </select>
                <button className="px-4 py-2 inline-block text-sm font-medium text-white transition-colors duration-150 bg-orange-600 border border-transparent rounded-lg active:bg-orange-600 hover:bg-orange-700 focus:outline-none focus:shadow-outline-orange">
                  Tambah
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
