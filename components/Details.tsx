import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./ui/accordion";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
export default function Details() {
	return (
	
			<div className="mt-4 mb-4 font-mono tracking-wide w-[75%] h-[85vh] overflow-y-auto overflow-x-hidden">
				<Accordion type="multiple">
					<AccordionItem value="about">
						<AccordionTrigger>About Me</AccordionTrigger>
						<AccordionContent className="dark:text-cyan-300 text-gray-700">
							Hey, I am Vishisht Dubey, a third-year student pursuing an
							Integrated Dual Degree (Btech. + Mtech.) at the Indian Institute
							of Technology (BHU), Varanasi. I have been into computer science
							since childhood when I downloaded C++ and Game Development ebooks
							using my 2G network. I started my programming journey with Python
							and have loved programming ever since. I proceeded in my
							programming journey by making games like tic-tac-toe and drum
							play. Then, I moved on to C++, Javascript/Typescript, and Golang.
							I am proficient in these and can learn new language frameworks
							quickly. I am an avid learner and am always into new tech and
							concepts. I recently grew interested in Conway’s Game of Life and
							implementing it in C++/SDL in my free time. I have been into OSS
							for some time now, so much so that every software on my laptop is
							open source (from OS to terminal). When not doing Open Source, I
							do Competitive Programming, Computer Graphics stuff, Image
							Processing, and anything Computer Science. I love learning new
							concepts but can not bear repetition. Once I understand how
							something is done, implementing it repeatedly is not enjoyable. I
							am a tech team member of the college’s placement cell, and I guide
							my fellow juniors in operating systems, web development, and cloud
							technologies. Apart from tech, I like playing piano, watching
							movies and web series, and listening to music.
						</AccordionContent>
					</AccordionItem>
					<Separator/>
					<AccordionItem value="skills">
						<AccordionTrigger>Skills</AccordionTrigger>
						<AccordionContent>
							<div>
							<h2>Languages</h2>
							<div>
							<Badge>C++</Badge>
							<Badge>Python</Badge>
							<Badge>Javascript/Typescript</Badge>
							</div>
							</div>
							<div>
							<h2>Frameworks</h2>
							<div>
							<Badge>react.js</Badge>
							<Badge>express.js</Badge>
							<Badge>django</Badge>
							<Badge>tailwind css</Badge>
							<Badge>next.js</Badge>
							<Badge>react-redux</Badge>
							</div>
							</div>
							<div>
								<h2>Tools</h2>
								<div>
								<Badge>Docker</Badge>
								<Badge>Git/Github</Badge>
								<Badge>Git</Badge>
								</div>
							</div>
						</AccordionContent>
					</AccordionItem>
					<Separator/>
					<AccordionItem value="workExperience">
						<AccordionTrigger>Work Experience</AccordionTrigger>
						<AccordionContent>Brief intro about me</AccordionContent>
					</AccordionItem>
					<Separator/>
					<AccordionItem value="projects">
						<AccordionTrigger>Projects</AccordionTrigger>
						<AccordionContent>Brief intro about me</AccordionContent>
					</AccordionItem>
					<AccordionItem value="aboutuy">
						<AccordionTrigger>About Me</AccordionTrigger>
						<AccordionContent className="dark:text-cyan-300 text-gray-700">
							Hey, I am Vishisht Dubey, a third-year student pursuing an
							Integrated Dual Degree (Btech. + Mtech.) at the Indian Institute
							of Technology (BHU), Varanasi. I have been into computer science
							since childhood when I downloaded C++ and Game Development ebooks
							using my 2G network. I started my programming journey with Python
							and have loved programming ever since. I proceeded in my
							programming journey by making games like tic-tac-toe and drum
							play. Then, I moved on to C++, Javascript/Typescript, and Golang.
							I am proficient in these and can learn new language frameworks
							quickly. I am an avid learner and am always into new tech and
							concepts. I recently grew interested in Conway’s Game of Life and
							implementing it in C++/SDL in my free time. I have been into OSS
							for some time now, so much so that every software on my laptop is
							open source (from OS to terminal). When not doing Open Source, I
							do Competitive Programming, Computer Graphics stuff, Image
							Processing, and anything Computer Science. I love learning new
							concepts but can not bear repetition. Once I understand how
							something is done, implementing it repeatedly is not enjoyable. I
							am a tech team member of the college’s placement cell, and I guide
							my fellow juniors in operating systems, web development, and cloud
							technologies. Apart from tech, I like playing piano, watching
							movies and web series, and listening to music.
						</AccordionContent>
					</AccordionItem>
					<Separator/>
				</Accordion>
				
			</div>

	);
}
