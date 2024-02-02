import Image from 'next/image'

export function Header() {
    return (
        <header className='w-full h-28 items-center'>
            <Image 
            src="/logo.svg"
            alt="Blog Fabrício Damasceno"
            width={229}
            height={50}            
            />
        </header>
    )
}