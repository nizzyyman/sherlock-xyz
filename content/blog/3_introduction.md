---
  title: "Introduction to Sherlock"
  intro: "Sherlock is a protocol on the Ethereum blockchain that protects Decentralized Finance (DeFi) users from exploits with proprietary security analysis and protocol-level coverage."
  date: "2021-07-23T00:00:00"
  slug: "3_introduction"
  external: false
  author: "Jack Sanford"
---

# Introducing Sherlock

After nine months of planning, building and gathering the right pieces for the different participants of our ecosystem, we are excited to share more detailed information about what we’ve been working on! Cue Sherlock — a risk management platform built on Ethereum and designed to keep end users protected by providing affordable and scalable coverage to protocols.

## The current state of DeFi and DeFi Security

Defi has rapidly grown over the past year from $17B in total value locked (TVL) only a year ago, to now close to [~$100B](https://defipulse.com/) in TVL today. Less than 2% of this is covered against hacks. Money-losing bugs like the [~$19M Cream Finance flash loan attack](https://www.theblockcrypto.com/linked/116055/creamfinance-exploited-in-18-8-million-flash-loan-attack) to grand slam hack schemes like the [$600M Poly Network hack](https://www.rekt.news/polynetwork-rekt/) (even though the hacker returned nearly all of the money) are just a couple that have occurred amidst this growth. So far in 2021, over [$1B worth of exploits](https://www.rekt.news/leaderboard/) have occurred in DeFi.

To ensure DeFi fulfills its potential to bring equality of financial access to billions of people, we’ve focused all of our efforts on making DeFi more secure. We believe exploit protection protocols are one of the fundamental building blocks of DeFi, and that better managing smart contract security risk will unlock the value of DeFi for billions more participants across the globe.

To an average user, security in DeFi is quite opaque. One can do their best to find protocols that have been audited. This is a great first step because auditors are some of the smartest people in DeFi and they are able to prevent an overwhelming majority of DeFi hacks. Audits are a great tool to get an expert’s time for 1 or 2 weeks to review a protocol’s code, although, they are still incomplete solutions as the auditors bear no risk and could have little incentive to do well (as they get paid either way and only reputation is on the line). And DeFi is not build once, ship once. Sometimes even auditors can miss things, in the case of the [SushiSwap MISO bug](https://www.paradigm.xyz/2021/08/two-rights-might-make-a-wrong/) for example. And if an exploit happens, it’s the average user who often ends up holding the bag. Bug bounties can often help get some of that money back, and we think extra-large bug bounties [(example here)](https://etherscan.io/tx/0x92d4c6643648cb6fc4aff8e740157f49bcb201e4f170c1f9ff46947214658773) should be normalized.

For providing greater assurance to the average user around keeping their funds safe, the current options in DeFi are few and far between. Often, smart contract cover is much too expensive to justify, the conditions for claim payouts are unclear, and the user experience is harrowingly difficult even for those who are DeFi-native.

Sherlock was created to solve these problems and bring a safer, easier and more affordable user experience to DeFi.


## How Sherlock achieves an aligned system

The Sherlock ecosystem involves 3 main participants: Watsons (Sherlock’s decentralized security team), Protocols, and Stakers (capital providers of the pool). These three participants synergistically work together to create a system that (1) incentivizes Watsons to keep protocols as safe as possible, (2) produces reliable coverage for protocols and (3) doesn’t require stakers to be smart contract security experts.

![Sherlock protocol flow](../../img/blog/3_introduction/flowchart.jpeg "Sherlock protocol flow")

Sherlock is differentiated from other solutions in two major ways: (1) Pricing and (2) UX.

### Pricing

The way coverage through Sherlock works is that Watsons will assess the riskiness of a protocol through deep fundamental research and then will work with the risk team to price out coverage for the protocol. Areas of assessment include protocol architecture, complexity of on-chain operations, upgradability risks, economic risks, protocol dependencies (composability), oracle manipulation risks, processes for shipping secure code, “emergency” mechanisms for limiting hack magnitudes, etc.

Sherlock actually does the work required to price risk as accurately as possible on an individual protocol level.

Other risk management protocols use a utilization curve to price coverage which means prices change dynamically with the demand for cover. This means it is likely that 99% of the coverage written is mis-priced. If the ‘correct’ price is X%, then every cover written on the utilization curve at <X% is underpriced and every cover written >X% is overpriced. It’s very rare that covers are written at exactly X% when using a utilization curve. In Sherlock’s case, all covers are written at exactly X%, ensuring both sides of the marketplace get a fair price every time.

Other approaches to pricing similarly fall flat. Using machine learning for price discovery is dangerous because there is so little historical data available in DeFi security. Pricing based on supply and demand usually requires the supply side to have deep smart contract security knowledge. This approach can have trouble scaling. If pricing is not trustworthy, stakers won’t stake funds. So, we believe the only way to truly understand a protocol’s risk and price it as accurately as possible is through deep fundamental research.

Sherlock aligns leading security experts and stakers in a way that makes sense for both parties. Stakers trust the pricing decisions of Watsons because each Watson get compensated very well if their pricing turns out right, but can lose the majority of their compensation if their pricing turns out wrong. Stakers only need to trust the incentive alignment to feel comfortable delegating their capital to security experts; they don’t need to be experts themselves. And Watsons benefit from the capital provided by stakers because they get paid as a % of premiums written against that capital. As a bonus, the vesting nature of Watsons’ compensation incentivizes continuous monitoring/assessment of the protocols they are responsible for, as opposed to the transactional nature of many audits.

_Staking is not open to everyone during Sherlock’s guarded launch, but it will become available in the coming months._

### UX

Currently, the user experience is too difficult for an average user who wants protection. Most risk management protocols make users go to their site, choose a fixed amount of coverage (on an amount that’s likely changing every block) and choose a length of time for coverage (which requires continuous updating). Then the user must hope coverage is available at all, let alone at a reasonable price. This experience will not help DeFi scale to millions of users.

When it comes to interacting with protocols in DeFi, Sherlock believes the easiest UX is no UX. This is why Sherlock works directly with protocols instead of users. Users shouldn’t have to manage their own coverage. They should simply use a DeFi protocol and know that they are automatically covered. This is the experience that will allow DeFi to scale to millions of users.

## Plans for decentralization and the SHER token

The role of the SHER token is to eventually govern the Sherlock protocol. The biggest task of SHER tokenholders will be to manage the security teams through a decentralized workflow. In the short term, SHER tokens will play a large role in incentivizing the marketplace (for LPs, for aligning interests with protocols, and for compensating security experts) but the SHER token distributions will decrease over time.

We will do a future post explaining the mechanics, design and constraints around governance by SHER tokenholders, as well as edge cases we expect and possible mitigations for those edge cases.

## On an end note

It’s still early days for Sherlock, but we are excited to build infrastructure that can get DeFi to mass adoption. If you are a security or risk-minded individual with 20 years or 2 weeks of experience/interest and want to make DeFi safer, join the conversation around security in [our Discord](https://discord.com/invite/rmKm8n93) and reach out if there are ways you want to contribute to the protocol.

## Other places to learn more

1. [Sherlock Docs](https://docs.sherlock.xyz/)
2. [Twitter](https://twitter.com/Sherlock_DeFi)


