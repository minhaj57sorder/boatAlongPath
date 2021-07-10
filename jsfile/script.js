

        gsap.set("#BoatLayer", {transformOrigin: "50% 50%"});
        gsap.set("#BoatLV", {opacity:0});
        let BtTl = gsap.timeline({
            scrollTrigger: {
            trigger: "#PathLayer",
            start: "top 0%",
            end: "bottom 100%",
            scrub: 4,
            // markers: true, 
            onUpdate: self => {
            gsap.to("#BoatLayer",0.01,{rotationY: () => self.direction === 1 ? 0 : -180, overwrite: 'auto'});
            }
        },
        })
        BtTl.to("#BoatLayer",10,{
        ease: "none",
        immediateRender: true,
        motionPath: {
            path: "#MainPath",
            align: "#MainPath",
            alignOrigin: [ 0.5, 0.5],
            autoRotate: true,
        }
        })
        .to("#BoatRV",0.01,{opacity:0},.2)
        .to("#BoatLV",0.01,{opacity:1},.2)

        .to("#BoatRV",0.01,{opacity:1},4.28)
        .to("#BoatLV",0.01,{opacity:0},4.28)
        .to("#BoatRV",0.01,{opacity:0},7.9)
        .to("#BoatLV",0.01,{opacity:1},7.9)