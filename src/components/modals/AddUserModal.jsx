import React, { useContext } from "react";
import "../../css/addusermodal.css";
import { X } from "lucide-react";
import { useAddUsers } from "../../queries/users.query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../../validation/userSchema";
import { toast } from "react-toastify";
import { ThemeContext } from "../../context/ThemeProvider";

export const AddUserModal = ({ closeModal }) => {
  const {theme} = useContext(ThemeContext)
  const { mutate: addUser } = useAddUsers();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (formValues) => {
    const existinguser = JSON.parse(localStorage.getItem("addedUsers") || "[]");
    const maxid =
      existinguser.length > 0
        ? Math.max(...existinguser?.map((u) => u.id))
        : 208;
    const newid = maxid + 1;

    const newUser = {
      id: newid,
      firstName: formValues.fullname,
      age: formValues.age,
      email: formValues.email,
      phone: formValues.phone,
      address: { city: formValues.addressCity },
      company: { name: formValues.companyName },
    };

    addUser(newUser);

    closeModal();
  };

  return (
    <div className={`modal-overlay ${theme}`}>
      <div style={{backgroundColor:theme==="light"?"":"#181b2d", color:theme==="light"?"":"#fff"}} className="modal">
        <div className="modal-header">
          <h2 style={{ color:theme==="light"?"":"#fff"}}>Add User</h2>
          <button className="close-btn" onClick={closeModal}>
            <X size={16} />
          </button>
        </div>

        <form className="modal-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>
              Full Name <span className="ast">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              {...register("fullname")}
            />
            {errors.fullname && (
              <span className="error">{errors.fullname.message}</span>
            )}
          </div>

          <div className="form-group">
            <label>
              Age <span className="ast">*</span>
            </label>
            <input
              type="number"
              placeholder="Enter age"
              {...register("age", { valueAsNumber: true })}
            />
            {errors.age && <span className="error">{errors.age.message}</span>}
          </div>

          <div className="form-group">
            <label>
              Email <span className="ast">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter email"
              {...register("email")}
            />
            {errors.email && (
              <span className="error">{errors.email.message}</span>
            )}
          </div>

          <div className="form-group">
            <label>
              Phone <span className="ast">*</span>
            </label>
            <input
              type="tel"
              placeholder="Enter phone number"
              {...register("phone")}
            />
            {errors.phone && (
              <span className="error">{errors.phone.message}</span>
            )}
          </div>

          <div className="form-group">
            <label>
              Address City <span className="ast">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter city"
              {...register("addressCity")}
            />
            {errors.addressCity && (
              <span className="error">{errors.addressCity.message}</span>
            )}
          </div>

          <div className="form-group">
            <label>
              Company Name <span className="ast">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter company name"
              {...register("companyName")}
            />
            {errors.companyName && (
              <span className="error">{errors.companyName.message}</span>
            )}
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
