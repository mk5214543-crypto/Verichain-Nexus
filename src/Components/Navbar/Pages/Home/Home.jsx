// const Home = () => {
//   return (
//     <main className="max-w-6xl mx-auto px-4 pt-24 pb-20">
//       {/* HERO SECTION */}
//       <section className="grid gap-12 md:grid-cols-2 items-center">
//         {/* LEFT: main text + buttons */}
//         <div className="space-y-6">
//           {/* Small tag line */}
//           <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#14B8A6]">
//             Blockchain • Charity • Transparency
//           </p>

//           {/* Main heading */}
//           <h1 className="text-3xl md:text-4xl font-semibold leading-tight text-[#E5E7EB]">
//             Make every donation{" "}
//             <span className="text-[#22C55E]">traceable</span> and{" "}
//             <span className="text-[#14B8A6]">trustworthy</span>.
//           </h1>

//           {/* Short description */}
//           <p className="text-sm md:text-base text-[#9CA3AF] max-w-lg">
//             A blockchain based charity donation system that records every
//             donation on an immutable ledger, so donors can track their impact
//             from wallet to beneficiary in real time.
//           </p>

//           {/* Buttons row */}
//           <div className="flex flex-wrap gap-4">
//             <button
//               className="
//                 inline-flex items-center justify-center
//                 px-5 py-2.5 rounded-lg
//                 text-sm font-medium
//                 bg-gradient-to-r from-[#22C55E] to-[#14B8A6]
//                 text-[#020617]
//                 shadow-[0_0_25px_rgba(34,197,94,0.5)]
//                 transition-transform duration-200
//                 hover:scale-105
//               "
//             >
//               Start Donating
//             </button>

//             <button
//               className="
//                 inline-flex items-center justify-center
//                 px-5 py-2.5 rounded-lg
//                 text-sm font-medium
//                 border border-[#14B8A6]/50
//                 text-[#E5E7EB]
//                 bg-[#020617]
//                 hover:bg-[#0B1120]
//                 transition-colors duration-200
//               "
//             >
//               View Campaigns
//             </button>
//           </div>

//           {/* Quick trust stats */}
//           <div className="flex flex-wrap gap-6 text-xs text-[#9CA3AF] pt-2">
//             <div>
//               <p className="text-[#E5E7EB] text-sm font-semibold">100%</p>
//               <p>On‑chain donation history</p>
//             </div>
//             <div>
//               <p className="text-[#E5E7EB] text-sm font-semibold">24/7</p>
//               <p>Transparent tracking</p>
//             </div>
//             <div>
//               <p className="text-[#E5E7EB] text-sm font-semibold">0%</p>
//               <p>Manual tampering risk</p>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT: live campaign / blockchain feel card */}
//         <div className="relative">
//           {/* Glow background */}
//           <div className="absolute -inset-4 bg-gradient-to-tr from-[#14B8A6]/25 via-transparent to-[#22C55E]/15 blur-3xl opacity-70" />

//           <div className="relative rounded-2xl bg-[#0B1120] border border-[#14B8A6]/40 shadow-2xl p-5 space-y-5">
//             {/* Header row */}
//             <div className="flex items-center justify-between">
//               <p className="text-xs font-medium text-[#9CA3AF]">
//                 Featured Campaign
//               </p>
//               <span className="inline-flex items-center gap-1 rounded-full bg-[#020617] px-3 py-1 text-[10px] font-medium text-[#22C55E]">
//                 <span className="text-[12px]">●</span> On‑chain verified
//               </span>
//             </div>

//             {/* Campaign info */}
//             <div>
//               <p className="text-sm font-semibold text-[#E5E7EB]">
//                 Clean Water for Village A
//               </p>
//               <p className="text-xs text-[#9CA3AF]">
//                 Funds are locked in a smart contract and released only when
//                 water wells and filters are deployed.
//               </p>
//             </div>

//             {/* Progress bar */}
//             <div className="space-y-1">
//               <div className="flex justify-between text-[11px] text-[#9CA3AF]">
//                 <span>Raised: 4.2 ETH</span>
//                 <span>Goal: 6 ETH</span>
//               </div>
//               <div className="h-2 w-full rounded-full bg-[#020617] overflow-hidden">
//                 <div className="h-full w-7/12 rounded-full bg-gradient-to-r from-[#22C55E] to-[#14B8A6]" />
//               </div>
//             </div>

//             {/* Mini transaction list */}
//             <div className="space-y-2 pt-2">
//               <p className="text-xs text-[#9CA3AF]">Recent donations</p>
//               <div className="space-y-1.5 text-xs">
//                 <div className="flex items-center justify-between">
//                   <span className="text-[#E5E7EB]">0xA3f...91b2</span>
//                   <span className="text-[#22C55E] font-medium">+0.45 ETH</span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-[#E5E7EB]">0x9C1...d7e4</span>
//                   <span className="text-[#22C55E] font-medium">+0.20 ETH</span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-[#E5E7EB]">0x5B8...3af0</span>
//                   <span className="text-[#22C55E] font-medium">+1.00 ETH</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* WHY BLOCKCHAIN SECTION */}
//       <section className="mt-16 space-y-6">
//         <h2 className="text-lg font-semibold text-[#E5E7EB]">
//           Why blockchain for charity?
//         </h2>

//         <div className="grid gap-6 md:grid-cols-3">
//           {/* Transparency */}
//           <div className="rounded-xl bg-[#0B1120] border border-[#14B8A6]/25 p-4 space-y-2">
//             <p className="text-sm font-semibold text-[#E5E7EB]">Transparency</p>
//             <p className="text-xs text-[#9CA3AF]">
//               Every donation is recorded on a public ledger, so donors can see
//               exactly when and where their funds are used.
//             </p>
//           </div>

//           {/* Security */}
//           <div className="rounded-xl bg-[#0B1120] border border-[#14B8A6]/25 p-4 space-y-2">
//             <p className="text-sm font-semibold text-[#E5E7EB]">Security</p>
//             <p className="text-xs text-[#9CA3AF]">
//               Immutable blockchain records reduce tampering, fraud and hidden
//               middlemen in the donation process.
//             </p>
//           </div>

//           {/* Automation */}
//           <div className="rounded-xl bg-[#0B1120] border border-[#14B8A6]/25 p-4 space-y-2">
//             <p className="text-sm font-semibold text-[#E5E7EB]">Automation</p>
//             <p className="text-xs text-[#9CA3AF]">
//               Smart contracts can release funds automatically only when
//               predefined charity milestones are achieved.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* HOW IT WORKS SECTION */}
//       <section className="mt-16 space-y-6">
//         <h2 className="text-lg font-semibold text-[#E5E7EB]">
//           How it works
//         </h2>

//         <div className="grid gap-6 md:grid-cols-3 text-xs text-[#9CA3AF]">
//           <div className="rounded-xl bg-[#0B1120] border border-[#14B8A6]/20 p-4 space-y-2">
//             <p className="text-sm font-semibold text-[#E5E7EB]">1. Choose</p>
//             <p>
//               User connects wallet / logs in and selects a verified charity
//               campaign to support.
//             </p>
//           </div>

//           <div className="rounded-xl bg-[#0B1120] border border-[#14B8A6]/20 p-4 space-y-2">
//             <p className="text-sm font-semibold text-[#E5E7EB]">2. Donate</p>
//             <p>
//               Donation is sent to a smart contract and stored on the blockchain
//               with a transaction hash.
//             </p>
//           </div>

//           <div className="rounded-xl bg-[#0B1120] border border-[#14B8A6]/20 p-4 space-y-2">
//             <p className="text-sm font-semibold text-[#E5E7EB]">
//               3. Track impact
//             </p>
//             <p>
//               Donor can later see when funds were released and how they were
//               used for beneficiaries.
//             </p>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Home;





const Home = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 pt-24 pb-20">
      {/* HERO SECTION */}
      <section className="grid gap-12 md:grid-cols-2 items-center">
        {/* LEFT: main text + buttons */}
        <div className="space-y-6">
          {/* Small tag line */}
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#14B8A6]">
            Blockchain • Charity • Transparency
          </p>

          {/* Main heading */}
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight text-[#E5E7EB]">
            Make every donation{" "}
            <span className="text-[#22C55E]">traceable</span> and{" "}
            <span className="text-[#14B8A6]">trustworthy</span>.
          </h1>

          {/* Short description */}
          <p className="text-sm md:text-base text-[#9CA3AF] max-w-lg">
            A blockchain based charity donation system that records every
            donation on an immutable ledger, so donors can track their impact
            from wallet to beneficiary in real time.
          </p>

          {/* Buttons row */}
          <div className="flex flex-wrap gap-4">
            <button
              className="
                inline-flex items-center justify-center
                px-5 py-2.5 rounded-lg
                text-sm font-medium
                bg-gradient-to-r from-[#22C55E] to-[#14B8A6]
                text-[#020617]
                shadow-[0_0_25px_rgba(34,197,94,0.5)]
                transition-transform duration-200
                hover:scale-105
              "
            >
              Start Donating
            </button>

            <button
              className="
                inline-flex items-center justify-center
                px-5 py-2.5 rounded-lg
                text-sm font-medium
                border border-[#14B8A6]/50
                text-[#E5E7EB]
                bg-[#020617]
                hover:bg-[#0B1120]
                transition-colors duration-200
              "
            >
              View Campaigns
            </button>
          </div>

          {/* Quick trust stats */}
          <div className="flex flex-wrap gap-6 text-xs text-[#9CA3AF] pt-2">
            <div>
              <p className="text-[#E5E7EB] text-sm font-semibold">100%</p>
              <p>On‑chain donation history</p>
            </div>
            <div>
              <p className="text-[#E5E7EB] text-sm font-semibold">24/7</p>
              <p>Transparent tracking</p>
            </div>
            <div>
              <p className="text-[#E5E7EB] text-sm font-semibold">0%</p>
              <p>Manual tampering risk</p>
            </div>
          </div>
        </div>

        {/* RIGHT: illustration + live campaign card */}
        <div className="relative flex flex-col items-center gap-6">
          {/* Soft background glow behind everything */}
          <div className="absolute -inset-6 bg-gradient-to-tr from-[#14B8A6]/25 via-transparent to-[#22C55E]/15 blur-3xl opacity-70" />

          {/* Floating illustration */}
          <div className="relative w-44 h-44 md:w-56 md:h-56">
            {/* circular glow */}
            <div className="absolute inset-0 rounded-full bg-[#14B8A6]/15 blur-3xl" />

            {/* apni image ka path yahan laga do */}
            <img
              src="/heroimg4.png"
              alt="Blockchain charity illustration"
              className="relative w-80 h-80 object-contain animate-[float_4s_ease-in-out_infinite]"
            />
          </div>

          {/* Live campaign / blockchain card */}
          <div className="relative w-full max-w-sm rounded-2xl bg-[#0B1120] border border-[#14B8A6]/40 shadow-2xl p-5 space-y-5">
            {/* Header row */}
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-[#9CA3AF]">
                Featured Campaign
              </p>
              <span className="inline-flex items-center gap-1 rounded-full bg-[#020617] px-3 py-1 text-[10px] font-medium text-[#22C55E]">
                <span className="text-[12px]">●</span> On‑chain verified
              </span>
            </div>

            {/* Campaign info */}
            <div>
              <p className="text-sm font-semibold text-[#E5E7EB]">
                Clean Water for Village A
              </p>
              <p className="text-xs text-[#9CA3AF]">
                Funds are locked in a smart contract and released only when
                water wells and filters are deployed.
              </p>
            </div>

            {/* Progress bar */}
            <div className="space-y-1">
              <div className="flex justify-between text-[11px] text-[#9CA3AF]">
                <span>Raised: 4.2 ETH</span>
                <span>Goal: 6 ETH</span>
              </div>
              <div className="h-2 w-full rounded-full bg-[#020617] overflow-hidden">
                <div className="h-full w-7/12 rounded-full bg-gradient-to-r from-[#22C55E] to-[#14B8A6]" />
              </div>
            </div>

            {/* Mini transaction list */}
            <div className="space-y-2 pt-2">
              <p className="text-xs text-[#9CA3AF]">Recent donations</p>
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#E5E7EB]">0xA3f...91b2</span>
                  <span className="text-[#22C55E] font-medium">+0.45 ETH</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#E5E7EB]">0x9C1...d7e4</span>
                  <span className="text-[#22C55E] font-medium">+0.20 ETH</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#E5E7EB]">0x5B8...3af0</span>
                  <span className="text-[#22C55E] font-medium">+1.00 ETH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BLOCKCHAIN SECTION */}
      {/* ...tumhara baqi code yahan se same rehne do... */}
    </main>
  );
};

export default Home;
