/**
 * Central media registry.
 *
 * Every photographic asset used on the site is declared here with its alt text,
 * intrinsic dimensions and photographer attribution. Attribution is embedded in
 * the alt text as required by the licence and never rendered as visible copy.
 *
 * Remote imagery is used directly from the licensed CDN so the repository stays
 * free of binary files. Swap any entry for a local path inside `/public` when
 * Stackenzo supplied photography becomes available.
 */

export type Photo = {
  /** Base URL without sizing query parameters. */
  src: string;
  alt: string;
  width: number;
  height: number;
  provider: "pexels" | "unsplash";
};

const PEXELS_PHOTO = (id: number) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg`;
const UNSPLASH_PHOTO = (path: string) => `https://images.unsplash.com/${path}`;

const pexels = (id: number, alt: string): Photo => ({
  src: PEXELS_PHOTO(id),
  alt,
  width: 1600,
  height: 1067,
  provider: "pexels",
});

export const photos = {
  introBench: pexels(
    19895784,
    "Hands assembling an electronic board with tools on a workshop bench. Photo: ThisIsEngineering on Pexels.",
  ),
  discovery: pexels(
    34007253,
    "Two engineers examining shared technical work at a bench. Photo: khezez on Pexels.",
  ),
  researchLab: pexels(
    8532875,
    "Two researchers working under low laboratory lighting. Photo: Artem Podrez on Pexels.",
  ),
  feasibility: pexels(
    34132693,
    "Technician measuring equipment at an instrument bench. Photo: Bulat843 on Pexels.",
  ),
  design: pexels(
    7286009,
    "Electronic components and drafting tools laid out for a prototype design. Photo: kaboompics on Pexels.",
  ),
  prototype: pexels(
    7286026,
    "Hands wiring components on a prototype circuit. Photo: kaboompics on Pexels.",
  ),
  testing: pexels(
    7858300,
    "A hand adjusting an oscilloscope during a measurement. Photo: cottonbro studio on Pexels.",
  ),
  implementation: pexels(
    18471441,
    "Robotic arms operating on an automated production line. Photo: Ludovic Delot on Pexels.",
  ),
  industry: pexels(
    19233057,
    "Robotic machinery operating in a high-tech industrial facility. Photo: Hyundai Motor Group on Pexels.",
  ),
  schoolTeam: pexels(
    7868834,
    "Students collaborating on a robotics build in a school laboratory. Photo: Vanessa Loring on Pexels.",
  ),
  schoolBuild: pexels(
    7869085,
    "Students assembling a small robot together at a classroom table. Photo: Vanessa Loring on Pexels.",
  ),
  collegeTeam: pexels(
    9242807,
    "Two young engineers troubleshooting a circuit board together. Photo: Mikhail Nilov on Pexels.",
  ),
  collegeBuild: pexels(
    11679118,
    "Close view of hands assembling a circuit board with precision tools. Photo: Willquezada on Pexels.",
  ),
  skillengine: pexels(
    5380618,
    "Close view of a computer screen running software in a dark workspace. Photo: Tima Miroshnichenko on Pexels.",
  ),
  eyevision: pexels(
    6755085,
    "Detailed view of a camera sensor module and lens assembly. Photo: Tima Miroshnichenko on Pexels.",
  ),
  fisheriesAerial: pexels(
    30780717,
    "Aerial view of rectangular aquaculture ponds divided by earthen banks. Photo: Esra Bürcün Erşahin on Pexels.",
  ),
  fisheriesBuoy: pexels(
    18860600,
    "A marker buoy standing on still water at the edge of a pond. Photo: Simon L. on Pexels.",
  ),
  aquacultureSensor: {
    src: UNSPLASH_PHOTO("photo-1607194198255-847dfcd0c817"),
    alt: "A floating sensor marker on open water. Photo: Markus Spiske on Unsplash.",
    width: 1600,
    height: 1067,
    provider: "unsplash" as const,
  },
  aboutLab: pexels(
    18471531,
    "A spacious engineering laboratory with instrument benches. Photo: Ludovic Delot on Pexels.",
  ),
  aboutHands: pexels(
    11679115,
    "Hands positioning components on a circuit board. Photo: Willquezada on Pexels.",
  ),
  aboutTeam: pexels(
    8533138,
    "Researchers reviewing work in a dimly lit laboratory. Photo: Artem Podrez on Pexels.",
  ),
  circuitMacro: pexels(
    18372332,
    "Macro detail of a populated circuit board. Photo: Júlio Riccó on Pexels.",
  ),
} satisfies Record<string, Photo>;

/** Hero film. Same shot, two encodes so phones never pull the 1080p master. */
export const heroVideo = {
  desktop: "https://videos.pexels.com/video-files/8328048/8328048-hd_1920_1080_25fps.mp4",
  mobile: "https://videos.pexels.com/video-files/8328048/8328048-hd_1280_720_25fps.mp4",
  poster: "https://images.pexels.com/videos/8328048/pexels-photo-8328048.jpeg",
  alt: "Two researchers examining a robotic arm in a laboratory. Footage: Mikhail Nilov on Pexels.",
  width: 1920,
  height: 1080,
};

/** Builds a width-optimised URL for a licensed photograph. */
export function photoUrl(photo: Photo, width: number) {
  return photo.provider === "pexels"
    ? `${photo.src}?auto=compress&cs=tinysrgb&w=${width}`
    : `${photo.src}?auto=format&fit=crop&q=80&w=${width}`;
}

/** Responsive candidate set for `<img srcSet>`. */
export function photoSrcSet(photo: Photo, widths: number[] = [480, 800, 1200, 1600, 2000]) {
  return widths.map((width) => `${photoUrl(photo, width)} ${width}w`).join(", ");
}

export function videoPosterUrl(width = 1920) {
  return `${heroVideo.poster}?auto=compress&cs=tinysrgb&w=${width}`;
}
