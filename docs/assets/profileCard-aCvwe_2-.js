import"./tiger-5hZ-PmLe.js";/* empty css              */import"./main-I50Dt38l.js";import{p as t}from"./pocketbase-zYAbJ1uT.js";import{f,g as p}from"./template-b4QUZwbU.js";import{g as r}from"./getNode-pa7syr6m.js";import{b as s}from"./insert-BLqnNt-Q.js";import"./renderNavBar-7tb3M7JA.js";const a="bexmuprbriobf8v";(async()=>{const o=(await t.collection("users").getList(1,10,{filter:`id = "${a}" `})).items[0],i=r(".profile--user-info");s(i,p(o));const e=r(".profile--card-basic-infos");s(e,f(o))})();