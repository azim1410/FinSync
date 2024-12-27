import FriendsList from "../Friends";
import GroupsList from "../Groups";
import InviteFriend from "../InviteFriend";

const LeftPannel = () => {
  return (
    <div className="left-pannel">
        <FriendsList />
        <GroupsList />
        <InviteFriend />
    </div>
  );
};

export default LeftPannel;
