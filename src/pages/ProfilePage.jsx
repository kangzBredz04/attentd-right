export default function ProfilePage() {
  return (
    <main className="h-full overflow-y-auto bg-gray-50">
      <div className="container grid px-6 mx-auto">
        <div className="my-6 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-700">Edit Profile</h1>
        </div>
        <div className="w-full overflow-hidden rounded-lg shadow-xs">
          <form className="w-full overflow-x-auto bg-white p-4 flex flex-col gap-3">
            <label htmlFor="">
              User Name
              <input
                type="text"
                value={"super_admin"}
                className="w-full border-2 py-2 px-2 rounded-lg"
              />
            </label>
            <label htmlFor="" className="pt-3">
              User Email
              <input
                type="text"
                value={"superadmin@mail.com"}
                className="w-full border-2 py-2 px-2 rounded-lg"
              />
            </label>
          </form>
        </div>
      </div>
    </main>
  );
}
