import React from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import ProjectDetails from "../components/ProjectDetails";
import AddComment from "../components/AddComment";
import Comment from "../components/Comment";

const ProjectDetailsPage = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  return (
    <Modal onClose={handleClose}>
      <div className="flex">
        <ProjectDetails />
        <div className="px-10 w-[379px] flex flex-col gap-6">
          <h1 className="text-2xl font-semibold">Feedback</h1>
          <AddComment />
          <div className="flex flex-col gap-4">
            <Comment />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectDetailsPage;
