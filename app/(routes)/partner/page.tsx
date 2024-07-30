import { Container } from '@/components/layout/container'
import Image from 'next/image'
import Link from 'next/link'
const PartnerPage = () => {
    return (
        <Container>
            <div className="w-full flex-grow  px-10 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* <!-- Card 1 --> */}
                    <div className="flex flex-col justify-start gap-3">
                        <div className="relative flex-1 aspect-[100/127]">
                            <Link href="/">
                                <Image
                                    src="https://utfs.io/f/12fa0f8e-94e9-4448-bebb-b57c3d053d40-1g.PNG"
                                    alt="BUSINESS"
                                    fill
                                    className="absolute h-full w-full inset-0 text-transparent"
                                />
                            </Link>
                        </div>
                        <h3 className="font-medium text-primary __className_7357dc">
                            BUSINESS
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Lorem ipsum dolor sit amet, consectetur adipisci
                            elit, sed eiusmod tempor incidunt ut labore et
                            dolore magna aliqua. Ut enim ad mihv.
                        </p>
                    </div>

                    {/* <!-- Card 2 --> */}
                    <div className="flex flex-col justify-start gap-3">
                        <div className="relative flex-1 aspect-[100/127]">
                            <Link href="/">
                                <Image
                                    src="https://utfs.io/f/4fdd1c5d-c0a5-4d97-b66a-e7b67e4a54dc-1h.PNG"
                                    alt="CARTERING"
                                    fill
                                    className="absolute h-full w-full inset-0 text-transparent"
                                />
                            </Link>
                        </div>
                        <h3 className="font-medium text-primary __className_7357dc">
                            CARTERING
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Lorem ipsum dolor sit amet, consectetur adipisci
                            elit, sed eiusmod tempor incidunt ut labore et
                            dolore magna aliqua. Ut enim ad mihv.
                        </p>
                    </div>
                    {/* <!-- Card 3 --> */}
                    <div className="flex flex-col justify-start gap-3">
                        <div className="relative flex-1 aspect-[100/127]">
                            <Link href="/">
                                <Image
                                    src="https://utfs.io/f/a638c2a3-a252-466a-8cbd-4be9d3e3e7a1-1i.PNG"
                                    alt="CAREER"
                                    fill
                                    className="absolute h-full w-full inset-0 text-transparent"
                                />
                            </Link>
                        </div>
                        <h3 className="font-medium text-primary __className_7357dc">
                            CAREER
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Lorem ipsum dolor sit amet, consectetur adipisci
                            elit, sed eiusmod tempor incidunt ut labore et
                            dolore magna aliqua. Ut enim ad mihv.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default PartnerPage
