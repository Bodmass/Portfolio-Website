'use client'

import { motion } from 'framer-motion'
import Header from './components/Header'

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.25 }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
      {children}
    </motion.div>
  )
}

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Header />
      <PageTransition>{children}</PageTransition>
    </div>
  )
}
