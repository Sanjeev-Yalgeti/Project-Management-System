import { motion, AnimatePresence } from 'framer-motion';

export default function RadialWipe({ display, renderLoginForm, renderRegisterForm }) {
  
  // Text fade configuration variants
  const formVariants = {
    initial: { opacity: 0, x: display === 'login' ? 20 : -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: display === 'login' ? -20 : 20 }
  };

  return (
    <div className="relative w-full max-w-4xl h-full bg-slate-900 rounded-2xl overflow-hidden flex border border-[#12d4d0]/30 shadow-[0_0_30px_rgba(18,212,208,0.15)] text-white">
      
      {/* 1. LEFT PANEL (Shows Login form OR Welcome Register message) */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center p-8 md:p-12 z-10 relative">
            <AnimatePresence mode="wait">
            {display === 'login' ? (
                <motion.div
                key="login-form-pane"
                variants={formVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, delay: 0.1 }}
                className="w-full max-w-sm"
                >
                {renderLoginForm()}
                </motion.div>
            ) : (
            <motion.div
                key="welcome-register-pane"
                variants={formVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="text-center space-y-4"
            >
                <h2 className="text-4xl font-extrabold tracking-wider">HELLO, FRIEND!</h2>
                <p className="text-sm text-cyan-100/70 font-light">Enter your details and start your journey with us today.</p>
            </motion.div>
          )}
        </AnimatePresence>
    </div>

    {/* 2. THE RADIAL WIPER BLADE LAYER */}
    <motion.div
        className="absolute inset-0 bg-linear-to-b from-[#12d4d0] to-[#0c4b51] z-20 origin-bottom"
        style={{
        transformOrigin: '50% 100%',
        }}
        animate={{
        // Sweeps out of view, covers everything at 0, sweeps down the other side
        rotate: display === 'login' ? [-90, 0, 42] : [42, 0, -90],
        scaleY: [1, 1.6, 1.6, 1] // Enlarges mid-swing to guarantee full corner coverage
        }}
        transition={{
        duration: 1.2,
        ease: "easeInOut",
        times: [0, 0.5, 1]
        }}
    />

      {/* 3. RIGHT PANEL (Shows Welcome Login message OR Register form) */}
            <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center p-8 md:p-12 z-10 relative">
                <AnimatePresence mode="wait">
                    {display === 'register' ? (
                        <motion.div
                                key="register-form-pane"
                                variants={formVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.3, delay: 0.1 }}
                                className="w-full max-w-sm"
                        >
                            {renderRegisterForm()}
                        </motion.div>
                        ) : (
                        <motion.div
                            key="welcome-login-pane"
                            variants={formVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                            className="text-center space-y-4"
                        >
                            <h2 className="text-4xl font-extrabold tracking-wider">WELCOME BACK!</h2>
                            <p className="text-sm text-cyan-100/70 font-light">To keep connected with us please login with your personal info.</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
