'use client'

import { Button } from "@/components/ui/button"
import { 
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export function ModeToggle(){
    const { setTheme } = useTheme();

    return(
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant='ghost' size='sm' className="h-6 w-6 px-0 ml-2"></Button>
                <Sun/>
                <Moon />
                <span className="sr-only">Toggle</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onSelect={() => setTheme('light')}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setTheme('dark')}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setTheme('system')}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}