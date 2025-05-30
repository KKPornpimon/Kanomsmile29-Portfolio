'use client'

import { Tabs } from '@/components/ui/tabs'
import { motion } from 'framer-motion'
import Image from 'next/image'


export const MotionDiv = motion.create(motion.div)
export const MotionButton = motion.create(motion.button)
export const MotionImage = motion.create(Image)
export const MotionTabs = motion.create(Tabs)
