function ProfilePic() {
  return (<>
    <div className="flex justify-center items-center text-white rounded-full h-[392px] w-[392px] bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
      <img className="object-cover rounded-full h-96 h w-96" alt="portrait" src="./portrait.jpeg"></img>
    </div>
  </>);
}

export default ProfilePic;