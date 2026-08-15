import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContextData } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const { loginUser, user } = useContext(AuthContextData);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const submitHandler = (data) => {
    const response = loginUser(data.email, data.password);

    if (!response.success) {
      toast.error(response.message);
      return;
    }

    if (user.role === "artist") {
      navigate("/artistdashboard");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-[#05030b] text-white">
      {/*  BACKGROUND  */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-violet-700/15 blur-[130px]" />

        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-[130px]" />

        <div className="absolute bottom-[-250px] left-1/2 h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-purple-700/10 blur-[120px]" />

        {/* Music notes */}

        <span className="absolute left-[7%] top-[12%] rotate-[-15deg] text-3xl text-violet-500/25">
          ♪
        </span>

        <span className="absolute left-[42%] top-[7%] rotate-12 text-3xl text-fuchsia-400/20">
          ♫
        </span>

        <span className="absolute right-[8%] top-[15%] text-2xl text-violet-400/20">
          ♪
        </span>

        {/* Watermark */}

        <div className="absolute -bottom-10 right-[-10px] select-none text-[150px] font-black tracking-[-0.08em] text-white/[0.025]">
          VIBE
        </div>
      </div>

      <main className="relative z-10 h-screen w-full">
        <div className="mx-auto grid h-full w-full max-w-[1400px] grid-cols-[minmax(0,1fr)_460px] items-center gap-12 px-8 xl:px-14">
          {/* 
              LEFT SIDE
           */}

          <section className="flex h-full min-h-0 flex-col justify-center">
            {/* Badge */}

            <div className="mb-3 flex w-fit items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.025] px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.8)]" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.28em] text-gray-500">
                Your sound. Your world.
              </span>
            </div>

            {/* IMAGE */}

            <div className="relative w-full max-w-[560px]">
              <div className="absolute bottom-5 left-1/2 h-24 w-[70%] -translate-x-1/2 rounded-full bg-violet-600/25 blur-[65px]" />

              <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-[24px] border border-white/[0.07] bg-[#08050f] shadow-[0_25px_80px_rgba(0,0,0,0.55)] xl:h-[320px]">
                <img
                  src="/musichub-hero.png"
                  alt="MusicHub headphones"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            {/* BRAND */}

            <div className="mt-4">
              <h1 className="text-5xl font-black tracking-[-0.05em] xl:text-6xl">
                <span className="bg-gradient-to-r from-violet-300 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                  MusicHub
                </span>
              </h1>

              <p className="mt-1.5 text-sm leading-5 text-gray-400">
                Experience high-fidelity sound
                <br />
                tailored to your soul.
              </p>
            </div>

            {/* FEATURES */}

            <div className="mt-4 flex gap-3">
              {/* Feature 1 */}

              <div className="flex h-[58px] w-[125px] items-center gap-2.5 rounded-xl border border-white/[0.05] bg-white/[0.02] px-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/10 text-violet-300">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M4 17V9" />
                    <path d="M8 20V5" />
                    <path d="M12 17V7" />
                    <path d="M16 21V3" />
                    <path d="M20 16V8" />
                  </svg>
                </div>

                <div>
                  <p className="text-[8px] font-bold uppercase tracking-wider text-gray-400">
                    High Fidelity
                  </p>

                  <p className="mt-0.5 text-[8px] text-gray-600">Sound</p>
                </div>
              </div>

              {/* Feature 2 */}

              <div className="flex h-[58px] w-[125px] items-center gap-2.5 rounded-xl border border-white/[0.05] bg-white/[0.02] px-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/10 text-violet-300">
                  <span className="text-lg">∞</span>
                </div>

                <div>
                  <p className="text-[8px] font-bold uppercase tracking-wider text-gray-400">
                    Unlimited
                  </p>

                  <p className="mt-0.5 text-[8px] text-gray-600">Music</p>
                </div>
              </div>

              {/* Feature 3 */}

              <div className="flex h-[58px] w-[125px] items-center gap-2.5 rounded-xl border border-white/[0.05] bg-white/[0.02] px-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-fuchsia-400/20 bg-fuchsia-500/10 text-fuchsia-300">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M20.8 8.7c0 5.4-8.8 10.1-8.8 10.1S3.2 14.1 3.2 8.7A4.7 4.7 0 0 1 12 6.4a4.7 4.7 0 0 1 8.8 2.3Z" />
                  </svg>
                </div>

                <div>
                  <p className="text-[8px] font-bold uppercase tracking-wider text-gray-400">
                    Made For
                  </p>

                  <p className="mt-0.5 text-[8px] text-gray-600">You</p>
                </div>
              </div>
            </div>

            {/* MINI PLAYER */}

            <div className="mt-4 flex h-[52px] w-full max-w-[500px] items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 text-sm">
                ♪
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-[10px] font-semibold text-gray-300">
                  Feel the Rhythm
                </p>

                <p className="text-[8px] text-gray-600">Live your vibe</p>
              </div>

              {/* Waveform */}

              <div className="hidden items-center gap-[2px] sm:flex">
                <span className="h-2 w-[2px] rounded-full bg-violet-500/50" />
                <span className="h-4 w-[2px] rounded-full bg-violet-400/70" />
                <span className="h-6 w-[2px] rounded-full bg-fuchsia-400" />
                <span className="h-3 w-[2px] rounded-full bg-violet-400/70" />
                <span className="h-5 w-[2px] rounded-full bg-fuchsia-400/80" />
                <span className="h-3 w-[2px] rounded-full bg-violet-400/60" />
                <span className="h-6 w-[2px] rounded-full bg-fuchsia-400" />
              </div>

              <button
                type="button"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-violet-400/30 bg-violet-500/10 text-violet-300"
              >
                ▶
              </button>
            </div>
          </section>

          {/* 
              RIGHT LOGIN
           */}

          <section className="w-full">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[30px] bg-violet-600/10 blur-2xl" />
              <div className="relative rounded-[24px] border border-white/[0.09] bg-[#121117]/95 p-7 shadow-[0_30px_100px_rgba(0,0,0,0.6)] backdrop-blur-xl xl:p-8">
                <div className="absolute left-[15%] right-[15%] top-0 h-px bg-gradient-to-r from-transparent via-violet-400/70 to-transparent" />
                <div className="mb-7">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-lg text-violet-300">
                      ♪
                    </div>

                    <span className="rounded-full border border-white/[0.06] px-3 py-1 text-[7px] font-bold uppercase tracking-[0.2em] text-gray-600">
                      MUSIC HUB
                    </span>
                  </div>

                  <h2 className="text-[26px] font-bold tracking-tight">
                    Welcome{" "}
                    <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                      Back
                    </span>
                  </h2>

                  <p className="mt-1 text-[11px] text-gray-500">
                    Sign in to continue your journey.
                  </p>
                </div>

                {/*  FORM  */}

                <form onSubmit={handleSubmit(submitHandler)}>
                  {/* EMAIL */}

                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="mb-2 block text-[8px] font-bold uppercase tracking-[0.2em] text-gray-500"
                    >
                      Email Address
                    </label>

                    <div className="flex h-11 items-center rounded-lg border border-white/[0.07] bg-black/20 px-3.5 transition focus-within:border-violet-500/60">
                      {/* Email icon */}

                      <svg
                        className="mr-3 h-4 w-4 shrink-0 text-gray-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      >
                        <rect x="3" y="5" width="18" height="14" rx="2" />

                        <path d="m3 7 9 6 9-6" />
                      </svg>

                      {/* Input */}

                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="name@example.com"
                        {...register("email")}
                        className="w-full bg-transparent text-xs text-white outline-none placeholder:text-gray-700"
                      />
                    </div>
                  </div>

                  {/* PASSWORD */}

                  <div className="mb-4">
                    <div className="mb-2 flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="text-[8px] font-bold uppercase tracking-[0.2em] text-gray-500"
                      >
                        Password
                      </label>
                    </div>

                    <div className="flex h-11 items-center rounded-lg border border-white/[0.07] bg-black/20 px-3.5 transition focus-within:border-violet-500/60">
                      {/* Lock icon */}

                      <svg
                        className="mr-3 h-4 w-4 shrink-0 text-gray-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      >
                        <rect x="5" y="10" width="14" height="10" rx="2" />

                        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                      </svg>

                      {/* Input */}

                      <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        {...register("password")}
                        className="w-full bg-transparent text-xs tracking-[0.25em] text-white outline-none placeholder:text-gray-700"
                      />

                      {/* Eye button */}

                      <button
                        type="button"
                        className="ml-2 shrink-0 text-gray-600 transition hover:text-gray-300"
                      >
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        >
                          <path d="M2.5 12s3.5-5 9.5-5 9.5 5 9.5 5-3.5 5-9.5 5-9.5-5-9.5-5Z" />

                          <circle cx="12" cy="12" r="2.5" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* REMEMBER ME */}

                  <label className="mb-6 flex cursor-pointer items-center gap-2 text-[9px] text-gray-500">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      className="h-3.5 w-3.5 cursor-pointer accent-violet-500"
                    />
                    Remember Me
                  </label>

                  {/* LOGIN BUTTON */}

                  <button
                    type="submit"
                    className="group relative flex h-11 w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-500 text-xs font-bold shadow-[0_10px_30px_rgba(139,92,246,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_15px_35px_rgba(139,92,246,0.35)]"
                  >
                    <span>Login</span>

                    <span className="ml-2 text-base transition group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </form>

                {/* DIVIDER */}

                <div className="my-5 flex items-center gap-3">
                  <div className="h-px flex-1 bg-white/[0.06]" />

                  <span className="text-[8px] text-gray-600">OR</span>

                  <div className="h-px flex-1 bg-white/[0.06]" />
                </div>

                {/* GOOGLE */}

                <button
                  type="button"
                  className="flex h-11 w-full items-center justify-center gap-3 rounded-lg border border-white/[0.07] bg-white/[0.01] text-xs font-semibold text-gray-400 transition hover:bg-white/[0.03] hover:text-gray-200"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M21.35 12.23c0-.72-.06-1.42-.18-2.09H12v3.96h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.7 2.91-4.2 2.91-7.26Z"
                    />

                    <path
                      fill="#34A853"
                      d="M12 21.5c2.63 0 4.84-.87 6.45-2.35l-3.14-2.45c-.87.58-1.98.93-3.31.93-2.54 0-4.7-1.72-5.47-4.03H3.29v2.53A9.74 9.74 0 0 0 12 21.5Z"
                    />

                    <path
                      fill="#FBBC05"
                      d="M6.53 13.6A5.86 5.86 0 0 1 6.22 12c0-.56.1-1.1.31-1.6V7.87H3.29A9.5 9.5 0 0 0 2.5 12c0 1.53.37 2.98 1.02 4.13l3.01-2.53Z"
                    />

                    <path
                      fill="#EA4335"
                      d="M12 6.37c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.83 3.47 14.63 2.5 12 2.5a9.74 9.74 0 0 0-8.71 5.37l3.01 2.53C7.3 8.09 9.46 6.37 12 6.37Z"
                    />
                  </svg>
                  Continue with Google
                </button>

                {/* REGISTER */}

                <div className="my-5 h-px bg-white/[0.05]" />

                <p className="text-center text-[10px] text-gray-500">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    className="font-semibold text-fuchsia-400 transition hover:text-fuchsia-300"
                  >
                    Register
                  </button>
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Login;
