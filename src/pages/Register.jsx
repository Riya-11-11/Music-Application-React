import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContextData } from "../context/AuthContext";
import { useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();

  const { registerUser } = useContext(AuthContextData);

  const [role, setRole] = useState("listener");

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const submitHandler = (data) => {
    const response = registerUser({ ...data, role });

    if (!response.success) {
      alert(response.message);
      return;
    }

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#05030b] text-white">
      <div className="relative isolate overflow-hidden px-4 py-6 sm:px-6 lg:py-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(123,77,255,0.24),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_18%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,5,18,0.9),rgba(7,4,15,0.98))]" />

        <div className="relative mx-auto flex min-h-[calc(100vh-3rem)] max-w-xl items-center justify-center">
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="relative w-full rounded-[1.5rem] border border-white/10 bg-white/5 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-7 lg:p-8"
          >
            {/* Header */}
            <div className="space-y-3 text-center">
              <div className="space-y-1">
                <p className="text-[11px] uppercase tracking-[0.32em] text-violet-300">
                  MusicHub
                </p>

                <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Join the sound revolution.
                </h1>
              </div>

              {/* Listener / Artist Toggle */}
              <div className="mx-auto max-w-sm rounded-[1.15rem] border border-white/10 bg-[#100b1f]/90 p-1">
                <div className="grid grid-cols-2 gap-1 rounded-[0.95rem] bg-[#0e0a1c]/95 p-1">
                  <button
                    onClick={() => setRole("listener")}
                    type="button"
                    className={`rounded-[0.8rem] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] transition active:scale-95 ${
                      role === "listener"
                        ? "bg-violet-500/25 text-violet-100 shadow-sm shadow-violet-500/20 ring-1 ring-violet-400/20"
                        : "text-slate-500 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <div className="text-2xl">🎵</div>
                    <div className="mt-1 text-[0.7rem] font-semibold tracking-[0.3em]">
                      Listener
                    </div>
                  </button>

                  <button
                    onClick={() => setRole("artist")}
                    type="button"
                    className={`rounded-[0.8rem] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] transition active:scale-95 ${
                      role === "artist"
                        ? "bg-violet-500/25 text-violet-100 shadow-sm shadow-violet-500/20 ring-1 ring-violet-400/20"
                        : "text-slate-500 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <div className="text-2xl">🎤</div>
                    <div className="mt-1 text-[0.7rem] font-semibold tracking-[0.3em]">
                      Artist
                    </div>
                  </button>
                </div>
              </div>

              <input {...register("role")} value={role} type="hidden" />
            </div>

            {/* Input Fields */}
            <div className="mt-5 space-y-3">
              {/* Full Name + Username */}
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="group flex h-[50px] items-center gap-2.5 rounded-full border border-white/10 bg-[#110b20]/90 px-3.5 transition hover:border-violet-400/40">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-500/10 text-violet-200">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5ZM6 20c0-3.314 2.686-6 6-6s6 2.686 6 6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <input
                    {...register("fullName")}
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                  />
                </label>

                <label className="group flex h-[50px] items-center gap-2.5 rounded-full border border-white/10 bg-[#110b20]/90 px-3.5 transition hover:border-violet-400/40">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-500/10 text-violet-200">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 20h16"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                      <path
                        d="M7 8h10"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                      <path
                        d="M7 12h6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                      <path
                        d="M7 16h10"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>

                  <input
                    {...register("username")}
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                  />
                </label>
              </div>

              {/* Email */}
              <label className="group flex h-[50px] items-center gap-2.5 rounded-full border border-white/10 bg-[#110b20]/90 px-3.5 transition hover:border-violet-400/40">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-500/10 text-violet-200">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 7.5C4 5.843 5.343 4.5 7 4.5h10c1.657 0 3 1.343 3 3v9c0 1.657-1.343 3-3 3H7c-1.657 0-3-1.343-3-3v-9Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M4 7.5 12 13.5 20 7.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <input
                  {...register("email")}
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                />
              </label>

              {/* Password */}
              <label className="group flex h-[50px] items-center gap-2.5 rounded-full border border-white/10 bg-[#110b20]/90 px-3.5 transition hover:border-violet-400/40">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-500/10 text-violet-200">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="6"
                      y="10"
                      width="12"
                      height="8"
                      rx="3"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />

                    <path
                      d="M9 10V8a3 3 0 0 1 6 0v2"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>

                <input
                  {...register("password")}
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                />
              </label>
            </div>

            {/* Register Button */}
            <div className="mt-5">
              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition duration-200 hover:-translate-y-0.5"
              >
                Register →
              </button>

              <p className="mt-3 text-center text-xs text-slate-400 sm:text-sm">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="font-semibold text-white transition hover:text-violet-300"
                >
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
