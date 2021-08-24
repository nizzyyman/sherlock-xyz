---
  title: "Introduction to Sherlock"
  intro: "Sherlock is a protocol on the Ethereum blockchain that protects Decentralized Finance (DeFi) users from exploits with proprietary security analysis and protocol-level coverage."
  date: "2021-07-23T00:00:00"
  slug: "3_introduction"
  external: false
  author: "Jack Sanford"
---

# Introduction to Sherlock

Sherlock is a protocol on the Ethereum blockchain that protects Decentralized Finance \(DeFi\) users from exploits with proprietary security analysis and protocol-level coverage.

You can find a brief overview of the Sherlock ecosystem below.

## Sherlock Ecosystem

There are 3 main participants in the Sherlock ecosystem:

1. Protocols
2. Stakers
3. Security team

![](https://i.imgur.com/HTmUxBi.png)

### Protocols

Protocols pay Sherlock a small fee in return for repayment in the event of a hack. A protocol will indicate how much value they want covered \($1Bn, a specific pool, etc.\), and Sherlock will work with each protocol individually to draft a coverage agreement that outlines exactly what types of events/risks they want covered. Then Sherlock's security team will conduct a thorough assessment to surface issues and understand the risks related to a protocol. Next, the security team will work with Sherlock's risk team to determine the pricing for the protocol. If the protocol agrees to the pricing, they will start streaming payment to Sherlock block-by-block. In return, whenever a hack occurs at the protocol \(within coverage\), Sherlock will repay the hack amount in full. [UMA's Optimistic Oracle](https://docs.umaproject.org/getting-started/oracle) will be the final arbiters in deciding whether a certain hack falls under coverage and therefore should be paid out.

### Stakers

Stakers stake funds into the staking pools in return for what should be one of the highest APYs in DeFi. Right now, only USDC can be staked but we may expand this to more currencies in the future. The APY stakers will receive is made up of 3 streams:

1. Fees from protocol customers \(this will eventually be the biggest stream\)
2. Interest earned from depositing user stakes on lending protocols \(Aave for now\)
3. Incentive rewards paid in SHER \(Sherlock’s governance token\)

In return for these streams, a staker’s funds are at risk of being all or partially liquidated if a significant covered event \(e.g. hack\) occurs at one of the protocols covered by Sherlock \(or possibly a protocol that the covered protocol depends on\). Despite the risk, stakers are incentivized to stake because:

1. They are paid a high and commensurate APY for the risk
2. They see that the security team’s incentives are aligned with stakers
3. They are senior to the “first money out” pool and any affected protocol's deductible so staker funds are only at risk once those pools are fully liquidated

### Security Team

Sherlock’s security team will do a fundamental assessment of a protocol and provide input to the pricing of coverage \(alongside the Sherlock risk team\). Areas of assessment include protocol smart contracts, architecture, upgradability risks, unexpected economic risks, protocol dependencies \(composability\), oracle manipulation risks, development processes, monitoring mechanisms for limiting hack magnitudes, etc.

The security team will be incentivized to set a floor on the coverage pricing because the bulk of their compensation will depend on the dollar value of hacks vs. the price paid by the protocol for coverage over defined time intervals.

To put it simply, if stakers in the staking pools are well-compensated by a protocol’s fees \(net of hacks\), then the security team gets rewarded handsomely. If hacks eat away most or all of the fees to stakers, the security team responsible for that protocol makes far less. Once a relationship has been initiated with a protocol, the security team will work closely with the protocol’s developers to maintain and improve the security of the protocol as it changes over time.
