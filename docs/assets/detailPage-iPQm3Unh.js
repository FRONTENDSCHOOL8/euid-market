import{g as i,i as o,b as a}from"./tiger-TocbYAJf.js";import{a as s,g as e,p as n,b as r}from"./template-edFkWHV-.js";import{p as c}from"./pocketbase-zYAbJ1uT.js";import{g as m}from"./index-35H_NU9g.js";const p=m.timeline(),l=window.location.hash.slice(1),g=i(".Main-visual > img"),d=i(".main-content"),b=i(".function-bar > div > div");c.collection("product_list").getOne(l).then(t=>{s(g,"src",e(t)),o(d,n(t)),a(b,r(t)),p.from("body",{opacity:0,x:"100%",ease:"power2.inOut"})});