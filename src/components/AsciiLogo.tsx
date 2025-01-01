interface AsciiLogoProps {
  size?: 'small' | 'large'
}

const AsciiLogo: React.FC<AsciiLogoProps> = ({ size = 'large' }) => {
  const fontSize = size === 'small' ? 'text-[0.25rem] sm:text-[0.3rem]' : 'text-[0.4rem] sm:text-xs md:text-sm lg:text-base'

  return (
    <pre className={`font-mono ${fontSize} leading-none text-inherit bg-transparent`}>
      {`
ooo        ooooo oooooooooooo      88   .oooooo.                       
\`88.       .888' \`888'     \`8     .8'  d8P'  \`Y8b                      
 888b     d'888   888            .8'  888      888 oo.ooooo.   .oooo.o 
 8 Y88. .P  888   888oooo8      .8'   888      888  888' \`88b d88(  "8 
 8  \`888'   888   888    "     .8'    888      888  888   888 \`"Y88b.  
 8    Y     888   888         .8'     \`88b    d88'  888   888 o.  )88b 
o8o        o888o o888o        88       \`Y8bood8P'   888bod8P' 8""888P' 
                                                    888                
                                                   o888o               
`}
    </pre>
  );
};

export default AsciiLogo;

