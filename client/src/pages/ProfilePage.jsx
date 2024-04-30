import { getProfile } from "@/actions/postActions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const dispatch = useDispatch();

  const { id } = useParams(); //artist id

  useEffect(() => {
    dispatch(getProfile(id));
  }, [dispatch, id]);

  const { artist } = useSelector((state) => state?.posts);

  return (
    <div>
      ProfilePage
      {artist?.displayName}
    </div>
  );
};

export default ProfilePage;
