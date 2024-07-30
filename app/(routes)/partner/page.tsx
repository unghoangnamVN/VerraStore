import { Container } from '@/components/layout/container'
import Image from 'next/image'
const PartnerPage = () => {
    return (
        <Container>
            <div className="w-full flex-grow  px-10 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* <!-- Card 1 --> */}
                    <div className="flex flex-col justify-start gap-3">
                        <div className="relative flex-1 aspect-[100/127]">
                            <Image
                                src="./4.png"
                                alt="BUSINESS"
                                fill
                                className="absolute h-full w-full inset-0 text-transparent"
                            />
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
                            <Image
                                src="./5.png"
                                alt="CARTERING"
                                fill
                                className="absolute h-full w-full inset-0 text-transparent"
                            />
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
                            <Image
                                src="./6.png"
                                alt="CAREER"
                                fill
                                className="absolute h-full w-full inset-0 text-transparent"
                            />
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
