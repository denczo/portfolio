function ProfilePic() {
  return (<>
    <div className="flex justify-center items-center transition-all text-white rounded-full hover:p-4 p-1 aspect-square max-w-[392px] max-h-[392px] bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
      <img className="object-cover rounded-full aspect-square max-w-96 max-h-96 desktop:min-w-[256px] desktop:min-h-[256px]" alt="portrait" src="./content/portrait.webp"></img>
    </div>
  </>);
}

export default ProfilePic;