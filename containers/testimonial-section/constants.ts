import { ArtVenue, Shells, Zoomerr } from "@/components/Icons/Brands";
import { AuthorType } from "@/types/AuthorType";
import { BrandType } from "@/types/BrandType";

interface TestimonialInterface {
    id:number;
    brand:BrandType;
    author:AuthorType;
    desc:string;
}
export const Testimonials : TestimonialInterface[] = [
    {
        id:1,
        brand:{
            name:'SHELLS',
            icon:Shells()
        },
        desc:"Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla. Lacus, ut congue sagittis vel nisi integer imperdiet a vitae.",
        author:{
            name:"Hellena John",
            title:'Co-founder',
            img:'/users/user1.png'
        }
    },
    {
        id:2,
        brand:{
            name:'ArtVenue',
            icon:ArtVenue()
        },
        desc:"A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed lorem cursus.",
        author:{
            name:"David Oshodi",
            title:'Manager',
            img:'/users/user2.png'
        }
    },
    {
        id:3,
        brand:{
            name:'Zoomerr',
            icon:Zoomerr()
        },
        desc:"Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
        author:{
            name:"Hellen Jummy",
            title:'Team Lead',
            img:'/users/user3.png'
        }
    },
    {
        id:4,
        brand:{
            name:'SHELLS',
            icon:Shells()
        },
        desc:"Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla. Lacus, ut congue sagittis vel nisi integer imperdiet a vitae.",
        author:{
            name:"Hellena John",
            title:'Co-founder',
            img:'/users/user1.png'
        }
    },
    {
        id:5,
        brand:{
            name:'ArtVenue',
            icon:ArtVenue()
        },
        desc:"A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed lorem cursus.",
        author:{
            name:"David Oshodi",
            title:'Manager',
            img:'/users/user2.png'
        }
    },
    {
        id:6,
        brand:{
            name:'Zoomerr',
            icon:Zoomerr()
        },
        desc:"Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
        author:{
            name:"Hellen Jummy",
            title:'Team Lead',
            img:'/users/user3.png'
        }
    },
    {
        id:7,
        brand:{
            name:'SHELLS',
            icon:Shells()
        },
        desc:"Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla. Lacus, ut congue sagittis vel nisi integer imperdiet a vitae.",
        author:{
            name:"Hellena John",
            title:'Co-founder',
            img:'/users/user1.png'
        }
    },
    {
        id:8,
        brand:{
            name:'ArtVenue',
            icon:ArtVenue()
        },
        desc:"A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed lorem cursus.",
        author:{
            name:"David Oshodi",
            title:'Manager',
            img:'/users/user2.png'
        }
    },
    {
        id:9,
        brand:{
            name:'Zoomerr',
            icon:Zoomerr()
        },
        desc:"Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
        author:{
            name:"Hellen Jummy",
            title:'Team Lead',
            img:'/users/user3.png'
        }
    },
    
    
]