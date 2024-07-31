import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { TwitterLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="default">Menu</Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="lg:w-[500px] lg:py-4 lg:mt-1">


       

        <div className="flex justify-between">

        <ul className="text-slate-500  text-sm space-y-3 mt-2">
        <h1 className="font-semibold text-black">Photop</h1>


        <li>Lorem</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>


        <div className="flex gap-2">
        <TwitterLogoIcon></TwitterLogoIcon>
        <InstagramLogoIcon></InstagramLogoIcon>
        <LinkedInLogoIcon></LinkedInLogoIcon>

        </div>

        </ul>

        <ul className="text-slate-500 text-sm space-y-3 mt-2">

        <h1 className="font-semibold text-black">Product</h1>
       

        <li>Lorem</li>
        <li>Developers / API</li>
        <li>Photop+</li>
        <li>Shop</li>

        </ul>


        <ul className="text-slate-500 text-sm space-y-3 mt-2">

        <h1 className="font-semibold text-black">Community</h1>
      
        <li>Lorem</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>


        </ul>


        </div>
        
      </PopoverContent>
    </Popover>
  )
}
