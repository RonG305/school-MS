const Profile = () => {
    return (
        <div className="text-xs flex gap-3">
            <img src="/profile.jpg" width={50} height={50} className="rounded-full" alt="profile" />
            <div>
                <p className="font-bold">Ronald Mutia</p>
                <p>PM</p>
            </div>
           
        </div>
    )
}


export default Profile