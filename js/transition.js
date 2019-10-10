import Highway from "@dogstudio/highway";
import {TimelineLite} from "gsap";

//{} are use for object deconstruction. Only use specific portions of the import 

// create a class that extends the node 'Highway.Transition'.

class Fade extends Highway.Transition{
    // this takes two method. in & out

    in({to, done}){
        //responsible for page that is coming in (about)
        const timeLine = new TimelineLite();
        timeLine.fromTo(to, 0.5, {left: "-100%", top: "50%"},{left: "0%"})
        .fromTo(
            to,
            0.5,
             {height: "2vh"},
              {height: "90vh", top: "10%", onComplete: function(){
                  done();
                    }
                }
            )
        .fromTo(to.children[0], 2, {opacity: 0}, {opacity: 1})
        }
    out({done}){
        // responsible for page that is going out (index)
        done();
    }
}

export default Fade;