"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)(); //gracias a type express
router.get("/users");
router.post("/users");
router.delete("/users");
exports.default = router;
