"use client"

import { useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function MobileMenu() {
  useEffect(() => {
    const menuToggle = document.querySelector('.mobile-menu-toggle')
    const menuClose = document.querySelector('.mobile-menu-close')
    const mobileMenu = document.querySelector('.mobile-menu')
    
    if (!menuToggle || !menuClose || !mobileMenu) return
    
    const menuPanel = mobileMenu.querySelector('div')
    if (!menuPanel) return

    const openMenu = () => {
      mobileMenu.classList.remove('hidden')
      setTimeout(() => {
        menuPanel.classList.remove('translate-x-full')
      }, 10)
    }

    const closeMenu = () => {
      menuPanel.classList.add('translate-x-full')
      setTimeout(() => {
        mobileMenu.classList.add('hidden')
      }, 300)
    }

    const handleMenuToggle = () => openMenu()
    const handleMenuClose = () => closeMenu()
    
    const handleMenuClick = (e: Event) => {
      if (e.target === mobileMenu) {
        closeMenu()
      }
    }

    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const targetElement = document.querySelector(target.getAttribute('href') || '')
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
          closeMenu()
        }
      }
    }

    menuToggle.addEventListener('click', handleMenuToggle)
    menuClose.addEventListener('click', handleMenuClose)
    mobileMenu.addEventListener('click', handleMenuClick)
    
    // Add event listeners for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]')
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick)
    })

    // Cleanup function
    return () => {
      menuToggle.removeEventListener('click', handleMenuToggle)
      menuClose.removeEventListener('click', handleMenuClose)
      mobileMenu.removeEventListener('click', handleMenuClick)
      anchorLinks.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick)
      })
    }
  }, [])

  return null // This component doesn't render anything, it just handles the JavaScript
} 