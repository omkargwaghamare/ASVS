import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function GalleryPage() {
  // Define images for each category
  const meet = ["meet_1.jpg", "meet_2.jpg", "meet_3.jpg", "meet_4.jpg", "meet_5.jpg", "meet_6.jpg", "meet_7.jpg", "meet_8.jpg", "meet_9.jpg", "meet_10.jpg",
"meet_11.jpg", "meet_12.jpg", "meet_13.jpg", "meet_14.jpg", "meet_15.jpg", "meet_16.jpg", "meet_17.jpg", "meet_18.jpg", "meet_19.jpg", "meet_20.jpg",
"meet_21.jpg", "meet_22.jpg", "meet_23.jpg", "meet_24.jpg", "meet_25.jpg","meet_26.jpg", "meet_27.jpg", "meet_28.jpg", "meet_29.jpg", "meet_30.jpg"];
  const farewell = ["well_1.jpg", "well_2.jpg", "well_3.jpg", "well_4.jpg", "well_5.jpg", "well_6.jpg", "well_7.jpg", "well_8.jpg", "well_9.jpg", "well_10.jpg"];
  const birthdays = ["bday_1.jpg", "bday_2.jpg", "bday_3.jpg", "bday_4.jpg", "bday_5.jpg", "bday_6.jpg", "bday_7.jpg","bday_8.jpg"];
  const trips = ["trip_1.jpg", "trip_2.jpg", "trip_3.jpg", "trip_4.jpg", "trip_5.jpg", "trip_6.jpg", "trip_7.jpg", "trip_8.jpg", "trip_9.jpg"];

  // Combine all images for the "All" tab
  const allImages = [
    ...meet,
    ...farewell,
    ...birthdays,
    ...trips,
  ];
  function shuffleArray(array: string[]) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  // Gallery Grid Component
  const GalleryGrid = ({ images }: { images: string[] }) =>  (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((img, i) => (
        <div
          key={i}
          className="relative aspect-square overflow-hidden rounded-md group opacity-0 animate-fadeIn"
          style={{ animationDelay: `${i * 100}ms`, animationFillMode: "forwards" }}
        >
          <Image
            src={`/gallery/${img}`}
            alt={`Image ${i + 1}`}
            fill
            className="object-cover transition-transform group-hover:scale-110 duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
            <h3 className="text-white font-medium">{img.split('.')[0]}</h3>
            <p className="text-white/80 text-sm">2022</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* Header */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-pink-500 to-rose-600 overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center opacity-10"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center space-y-4 text-center">
            <span className="inline-block animate-bounce-slow bg-white text-pink-600 font-medium px-3 py-1 rounded-full text-sm mb-2">
              Explore
            </span>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white drop-shadow-md animate-fadeIn">
              Photo Gallery
            </h1>
            <p className="mx-auto max-w-[700px] text-pink-50 md:text-xl animate-slideUp">
              Browse through our collection of photos from various college events and activities.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="w-full py-12 md:py-24 relative">
        <div className="container px-4 md:px-6">
          {/* Tabs */}
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="all" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">
                All
              </TabsTrigger>
              <TabsTrigger value="meet" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">
                Meet
              </TabsTrigger>
              <TabsTrigger value="farewell" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">
                Farewell
              </TabsTrigger>
              <TabsTrigger value="birthdays" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">
                Birthdays
              </TabsTrigger>
              <TabsTrigger value="trips" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">
                Trips
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <GalleryGrid images={shuffleArray(allImages)} />
            </TabsContent>

            <TabsContent value="meet">
              <GalleryGrid images={meet} />
            </TabsContent>

            <TabsContent value="farewell">
              <GalleryGrid images={farewell} />
            </TabsContent>

            <TabsContent value="birthdays">
              <GalleryGrid images={birthdays} />
            </TabsContent>

            <TabsContent value="trips">
              <GalleryGrid images={trips} />
            </TabsContent>
          </Tabs>

          <div className="flex justify-center mt-12">
            <Button className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-pink-500/20">
              Submit Your Photos
            </Button>
          </div>
        </div>
      </section>

      {/* Photo Showcase */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-br from-pink-100 to-rose-50 dark:from-slate-900 dark:to-slate-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Share Your College Memories
              </h2>
              <p className="text-muted-foreground">
                Have photos from your college days? We'd love to add them to our gallery and share them with the alumni
                community.
              </p>
              <Button className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700">
                Upload Photos
              </Button>
            </div>
            <div className="md:w-1/2 relative">
              <div className="grid grid-cols-2 gap-3 relative animate-float">
                <Image
                  src="/gallery/trip_9.jpg"
                  width={200}
                  height={200}
                  alt="College memory"
                  className="rounded-lg shadow-xl rotate-3"
                />
                <Image
                  src="/gallery/trip_5.jpg"
                  width={200}
                  height={200}
                  alt="College memory"
                  className="rounded-lg shadow-xl -rotate-3"
                />
                <Image
                  src="/gallery/meet_20.jpg"
                  width={200}
                  height={200}
                  alt="College memory"
                  className="rounded-lg shadow-xl -rotate-6"
                />
                <Image
                  src="/gallery/meet_8.jpg"
                  width={200}
                  height={200}
                  alt="College memory"
                  className="rounded-lg shadow-xl rotate-6"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-pink-200 dark:bg-pink-900/20 z-0 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
