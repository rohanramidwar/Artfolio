import { getProfile } from "@/actions/postActions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const dispatch = useDispatch();

  const { id } = useParams(); //artist id
  console.log(id);

  useEffect(() => {
    dispatch(getProfile(id));
  }, [dispatch, id]);

  const { artist } = useSelector((state) => state?.posts);
  console.log("artist", artist);

  return <div>ProfilePage</div>;
};

export default ProfilePage;
