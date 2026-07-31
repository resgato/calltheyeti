import type { FAQ } from "@/components/FAQSection";

/**
 * Per-service FAQs.
 *
 * Written to answer the question a homeowner actually types, in the first
 * sentence, because answer engines quote the opening of an answer far more
 * often than the elaboration that follows. Claims are limited to what the site
 * already states (free estimates, price approved up front, licensed ROC360510)
 * plus general Arizona plumbing conditions.
 */
export const serviceFaqs: Record<string, FAQ[]> = {
  "custom-homes": [
    {
      question: "Do you work with builders and general contractors?",
      answer:
        "Yes. Much of our custom home work comes through builders, architects, and designers. We coordinate rough-in scheduling around framing and drywall, and we handle fixture specification so the finish work matches the plan.",
    },
    {
      question: "What does custom home plumbing actually include?",
      answer:
        "Two phases. Rough-in covers the supply, drain, waste, vent, and gas lines placed before drywall. Finish covers setting fixtures, valves, and appliances once surfaces are in. We handle both and pull permits where required.",
    },
    {
      question: "When should plumbing be scheduled during a build?",
      answer:
        "Rough-in happens after framing and before insulation and drywall, since the lines run inside the walls and slab. Booking early matters, because a rough-in that slips delays every trade behind it.",
    },
    {
      question: "Do large homes need a recirculation system?",
      answer:
        "Usually yes. On a sprawling floor plan the run from the water heater to the far bathroom is long enough that you wait minutes for hot water. A properly designed recirculation loop delivers hot water on demand and reduces waste.",
    },
  ],

  renovations: [
    {
      question: "Can you move plumbing to a new kitchen or bathroom layout?",
      answer:
        "Yes, though the cost depends on the foundation. Relocating a drain on a home with a crawlspace is straightforward. On a slab it means cutting and patching concrete, so we price that clearly before starting.",
    },
    {
      question: "Should I re-pipe during a remodel?",
      answer:
        "If the walls are already open and the home still has original galvanized or early copper supply lines, re-piping then costs far less than doing it later. We inspect what is there and tell you honestly whether it is worth it.",
    },
    {
      question: "How long does remodel plumbing take?",
      answer:
        "Rough-in for a single bathroom is typically one to two days, with finish work later once tile and surfaces are complete. The overall timeline depends on the other trades more than on the plumbing itself.",
    },
    {
      question: "Do you work with my tile installer and cabinet maker?",
      answer:
        "Yes. We set tile-ready rough-ins to the tile installer's dimensions and coordinate sink and faucet placement with cabinetry so nothing has to be reworked after the fact.",
    },
  ],

  repairs: [
    {
      question: "How do I know if I have a slab leak?",
      answer:
        "The common signs are a warm spot on the floor, the sound of running water when everything is off, an unexplained jump in the water bill, or cracking in flooring. Slab leaks are common in Arizona because expansive soil shifts under the foundation.",
    },
    {
      question: "Do you charge to diagnose the problem?",
      answer:
        "We quote the repair before we begin work, so you approve the price first. You will not get an invoice with charges you did not agree to.",
    },
    {
      question: "Should I repair or replace a failing fixture?",
      answer:
        "It depends on age and parts availability. A ten-year-old valve with a common cartridge is worth repairing. A corroded fixture with discontinued parts usually is not, and we will say so rather than sell you a repair that fails again.",
    },
    {
      question: "Why do pinhole leaks appear in copper pipe?",
      answer:
        "Mineral-heavy water slowly corrodes copper from the inside, and once one pinhole appears others generally follow along the same run. When we see that pattern we recommend evaluating the run rather than patching repeatedly.",
    },
  ],

  "water-softeners": [
    {
      question: "How hard is the water in the Phoenix area?",
      answer:
        "Hard enough to cause visible problems. Valley water commonly runs in the range of 12 to 25 grains per gallon depending on the source, which is why scale builds on fixtures, glass, and inside water heaters so quickly here.",
    },
    {
      question: "Will a water softener make my water heater last longer?",
      answer:
        "It helps considerably. Scale accumulates inside the tank and on the heat exchanger, which reduces efficiency and shortens service life. Softening the water is one of the most effective ways to protect that equipment.",
    },
    {
      question: "What is the difference between a softener and a conditioner?",
      answer:
        "A salt-based softener removes calcium and magnesium through ion exchange. A salt-free conditioner does not remove minerals, it changes their form so they are less likely to stick. Softeners address hardness directly, conditioners mainly reduce scale buildup.",
    },
    {
      question: "How do you size a system?",
      answer:
        "By actual fixture count and peak demand rather than a one-size unit. An undersized system regenerates constantly and wears out early, and an oversized one wastes salt and water.",
    },
  ],

  "bathtubs-showers": [
    {
      question: "Can you convert a tub to a walk-in shower?",
      answer:
        "Yes. It involves relocating and resizing the drain, replacing the valve, and setting a new pan or base. On a slab foundation the drain move requires cutting concrete, which we identify and price before starting.",
    },
    {
      question: "Do you handle the tile work too?",
      answer:
        "We do the plumbing side, including tile-ready rough-ins set to your tile installer's dimensions, then return for finish work once tile is complete. We coordinate directly with your tile installer on placement.",
    },
    {
      question: "How long does a shower valve replacement take?",
      answer:
        "Most valve replacements are a same-day job. Access is the variable. If there is no access panel we may need to open a small section of wall behind the shower, which we discuss with you first.",
    },
    {
      question: "Why does my shower lose pressure over time?",
      answer:
        "Usually mineral scale. Hard water deposits build inside the valve cartridge and showerhead and gradually restrict flow. Cleaning or replacing those parts typically restores it.",
    },
  ],

  "faucets-fixtures": [
    {
      question: "Can you install a faucet I bought myself?",
      answer:
        "Yes. We regularly install homeowner-supplied and designer-specified fixtures. We will tell you before we start if a fixture is missing parts or is not compatible with your existing supply lines.",
    },
    {
      question: "Why do faucets fail faster in Arizona?",
      answer:
        "Hard water. Mineral scale builds inside cartridges and aerators, which causes dripping, stiff handles, and reduced flow. It also etches finishes over time, which is why whole-home softening protects premium fixtures.",
    },
    {
      question: "Do you install pot fillers and specialty fixtures?",
      answer:
        "Yes, including pot fillers, filtration faucets, bar and prep sinks, and imported fixtures that use non-standard rough-in dimensions.",
    },
    {
      question: "Is it worth repairing a dripping faucet?",
      answer:
        "Often yes, if the fixture is decent quality and the cartridge is still available. For a builder-grade faucet already showing corrosion, replacement usually costs less over time than repeated repairs.",
    },
  ],

  "toilet-bidet-install": [
    {
      question: "How much does toilet installation cost?",
      answer:
        "It depends on the fixture and what we find underneath. A straight swap onto a sound flange is the low end. A corroded flange, a rough-in mismatch, or soft subfloor adds work. We quote the job before starting and re-quote if we uncover damage once the old toilet is pulled.",
    },
    {
      question: "What is a toilet rough-in and why does it matter?",
      answer:
        "The rough-in is the distance from the finished wall to the center of the drain. Twelve inches is standard, but many older Phoenix and Mesa homes are ten or fourteen. Buying a fixture without measuring it first is the most common reason an install stalls halfway through.",
    },
    {
      question: "Do I need an electrical outlet for a bidet?",
      answer:
        "For an electric bidet seat or an integrated smart toilet, yes. They need a GFCI outlet within reach of the toilet, and most bathrooms do not have one. Non-electric bidet seats tee off the existing water supply and need no outlet at all.",
    },
    {
      question: "Do you haul away the old toilet?",
      answer:
        "Yes. Removal and disposal of the old fixture is part of a replacement, so you are not left with it in the garage.",
    },
    {
      question: "Why does my toilet keep running?",
      answer:
        "Usually a worn flapper, a failed fill valve, or a float set too high. All are inexpensive fixes and worth doing quickly, because a continuously running toilet can waste hundreds of gallons a day on your water bill.",
    },
  ],

  "reverse-osmosis": [
    {
      question: "How much does reverse osmosis installation cost?",
      answer:
        "The main variables are the system you choose and whether the sink has a spare hole for the dedicated faucet. Drilling granite or quartz, or running a line to the refrigerator, adds to it. We give you a firm price before any work starts.",
    },
    {
      question: "How long does an under sink water filter installation take?",
      answer:
        "Most are a same-day job, typically a few hours. That covers teeing off the cold supply, mounting the unit and tank, setting the dedicated faucet, connecting the drain, and pressure testing the system before we leave.",
    },
    {
      question: "Do I still need a water softener if I have reverse osmosis?",
      answer:
        "They solve different problems. A softener treats hardness throughout the house and protects fixtures and water heaters. RO treats drinking water at one tap. They work well together, because softened water scales the RO membrane far less and makes it last longer.",
    },
    {
      question: "Can the RO system feed my refrigerator ice maker?",
      answer:
        "Yes, and it is worth doing. Running the RO line to the fridge gives you filtered water from the door and filtered ice. We can add it during the original installation or later.",
    },
    {
      question: "How often do reverse osmosis filters need replacing?",
      answer:
        "Sediment and carbon pre-filters usually every six to twelve months, and the membrane every two to five years. In the Phoenix area, and especially on unsoftened water, plan on the shorter end of both. A neglected pre-filter is the fastest way to ruin the membrane.",
    },
  ],
};

/**
 * FAQs for the non-service pages. These answer the entity-level questions
 * people put to an assistant ("who is Yeti Plumbing", "how do I reach them"),
 * which is what an engine needs to cite the business rather than a directory.
 */
export const pageFaqs: Record<string, FAQ[]> = {
  about: [
    {
      question: "Who is Yeti Plumbing?",
      answer:
        "Yeti Plumbing is a family owned plumbing company founded in 2020 and based in the Phoenix metro area of Arizona. We focus on residential work: custom home plumbing, renovations, service, and repairs.",
    },
    {
      question: "Is Yeti Plumbing licensed and insured?",
      answer:
        "Yes. We hold Arizona contractor license ROC360510 issued by the Arizona Registrar of Contractors, and we are fully insured and bonded. We pull permits where required and warranty our work.",
    },
    {
      question: "What areas does Yeti Plumbing serve?",
      answer:
        "Phoenix, Mesa, Scottsdale, Paradise Valley, Gilbert, Chandler, and Queen Creek, plus surrounding Phoenix metro communities.",
    },
    {
      question: "Do you work with builders and contractors?",
      answer:
        "Yes. We work directly with custom home builders, general contractors, architects, and interior designers, and we coordinate rough-in scheduling with the rest of the trades.",
    },
  ],

  contact: [
    {
      question: "How do I request plumbing service?",
      answer:
        "Call (801) 707-2547 or send the request form on this page. For an active leak or anything causing damage right now, call rather than submit a form so we can dispatch immediately.",
    },
    {
      question: "Do you charge for estimates?",
      answer:
        "No. Estimates are free, and the price is quoted and approved before any work begins, so nothing appears on the invoice that you did not agree to.",
    },
    {
      question: "What should I have ready when I call?",
      answer:
        "Your address, what the problem looks like, when it started, and whether water is currently running. If it is a fixture issue, knowing the brand helps us bring the right parts on the first visit.",
    },
    {
      question: "What are your hours?",
      answer:
        "Monday through Friday 8:00 to 5:00 and Saturday 8:00 to 2:00. We handle emergency situations such as burst pipes and sewer backups as a priority.",
    },
  ],

  services: [
    {
      question: "What plumbing services does Yeti Plumbing offer?",
      answer:
        "Emergency plumbing, drain cleaning, custom home plumbing, renovation plumbing, repairs, water heater installation and repair, water softeners, bathtub and shower work, and faucet and fixture installation.",
    },
    {
      question: "Do you offer emergency plumbing?",
      answer:
        "Yes. We respond to burst pipes, slab leaks, water heater failures, sewer backups, and total loss of water across Mesa, Scottsdale, Paradise Valley, and Phoenix.",
    },
    {
      question: "How does your pricing work?",
      answer:
        "We inspect the problem, explain what we found, and give you a firm price before starting. You approve that price first. Estimates are free and there are no hidden fees.",
    },
    {
      question: "Do you warranty your work?",
      answer:
        "Yes. Every job is backed by a warranty, and we are licensed under Arizona ROC360510 and fully insured.",
    },
  ],
};
