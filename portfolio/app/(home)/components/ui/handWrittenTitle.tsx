
import HandWrittenTitle from "@/components/ui/hand-written"
import Title from "../Title"
import Link from "next/link"



function HandWrittenTitleDemo() {
    return <HandWrittenTitle 
        title={<Link
          href="mailto:erdenebatbayar3@gmail.com"
          className="inline-block group p-2"
        ><Title text="Contact Me📬"></Title></Link>}
        subtitle=""
    />
}

export { HandWrittenTitleDemo }