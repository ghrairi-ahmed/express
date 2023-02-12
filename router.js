import { Router } from "express";
const router = Router()
router.get("/", (req, res)=>{
    res.render("home")
})

router.get("/contact", (req, res)=>{
    res.render("contact")
})

router.get("/servise", (req, res)=>{
    res.render("servise")
})

export default router