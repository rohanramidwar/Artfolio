import React from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import ShareWorkForm from "../components/ShareWorkForm";

const ShareWorkPage = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };
  return (
    <Modal onClose={handleClose}>
      <div className="flex justify-center mt-8">
        <div className="w-[446px] lg:mx-0 mx-6">
          <h1 className="text-3xl font-bold">Share work</h1>
          <ShareWorkForm />
        </div>
      </div>
    </Modal>
  );
};

export default ShareWorkPage;
