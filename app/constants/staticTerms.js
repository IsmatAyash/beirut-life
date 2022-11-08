import assets from './assets';

const setting = {
  slogan: 'Because we live everyday',
  greeting: 'We make sure you are Safe & Covered',
};

const commonTerms = {
  intro:
    'Whereas the Company agrees to insure the person(s) based on the information and the terms and conditions of the present contract, after the payment of the first and subsequent premiums to the Company on time, It is hereby agreed and understood that, if a covered claim has occurred subject to the terms and conditions of this contract during the insurance period mentioned in the Policy Schedule, then the beneficiary(ies) specified in the Policy Schedule, shall become entitled to the payment by the Company of the Sum Insured shown in the Policy Schedule, at the time of claim occurrence, after presenting to the Company satisfactory documents proofing the occurrence of the covered claim.',
  defs: {
    'Policyholder:':
      'The natural person or legal entity who has concluded an insurance contract, and is considered as the owner of the Policy. The Policyholder may exercise all ownership rights granted under this policy during the lifetime of the insured person(s).',
    'Company:':
      'Beirut Life s.a.l. registered in Lebanon, under Insurance Companies sub No.36/CA on 09/05/1993 and agreed to cover the sum insured stated in the Policy Schedule of this contract.',
    'Insured:': 'The person to whose life or health the insurance applies.',
    'Proposal Form:':
      'The official request for insurance cover filled and signed by the person to be insured. This form does not represent any proof of insurance cover and does not engage the Insurance Company in any obligation unless an official Policy issued and signed by the Company, subject to the conditions mentioned in this contract.',
    'Accidental Death Benefit:':
      'The covered amount is payable on death due to accident.',
    'Permanent and Total Disability (PTD) (Accident) any occupation:':
      'The covered amount is payable on permanent and total disablement due to accident if the policyholder is totally unable by reason of accident to follow his own occupation or any other occupation for remuneration. There is a deferment period of 6 months.',
    'Claim:':
      'Any loss occurred during the policy period and stated clearly as covered in this contract. Any claim shall not be covered if the premium(s) due by the Policyholder or the Insured is(are) not settled on time to the Company against a formal receipt issued by the Company.',
    'Policy Schedule:':
      'Essential part of the contract, indicating the special details of the contract and applicable provisions.',
    'Effective date:':
      'The moment when the obligations of the Company to settle insurance claims and its right to earn the relative premium under a concluded insurance contract arise, it is fixed on the date indicated in the Policy Schedule, noon time and considered in-force upon all of the following conditions have been achieved:',
    list: [
      'The contract is issued and formally signed by the Insurance Company.',
      'The contract is being delivered to the Policyholder.',
      'The first premium has been paid.',
    ],
    'Expiry date:':
      'The moment when an insurance contract ceases to be effective, on noon time of the date agreed and indicated in the Policy Schedule.',
    'Benefit:': `The sum assured paid under the insurance contract if an insurance event occurs. The present contract is a limited non-participating term Life Insurance, which ceases immediately at the expiry date with no additional compensation or surrender amount or paid-up amount to be paid by the Insurance Company.
      Any extension of the period of the present cover should be done in a separate contract.
      The Company is not responsible of any additional cost or fees or stamps or taxes of any kind as a result of claim and payment of the sum insured to the beneficiary(ies).`,
    'Beneficiary(ies):': `The natural person(s) or legal entity entitled to benefit under the insurance contract in case of Death of the insured person and the claim is reported as covered by the Insurance Company, as designated clearly in the application form by the Policyholder, and stated clearly in the Policy Schedule.
    In case of Death claim where the beneficiary(ies) is(are) no longer alive, his(their) share(s) will be distributed equally to the among the remaining alive beneficiaries.`,
  },
  clauses: {
    'Clause 2 - CONTRACT': `This General Conditions form, the Policy Schedule, the application therefore and the statements made by the Insured or the Policyholder during the medical examination, together with any Supplementary Contracts or endorsement applied for, attached hereto and stated to be a part hereof, constitute the entire contract.
    Special provisions shall be valid only when clearly indicated in the Policy Schedule or any formal endorsement on this Policy.`,
    'Clause 3 - PREMIUMS': `All the premiums of this contract as stated in the Policy Schedule are due and payable in advance at the Head Office of the Company or to any authorized Bank Agency against a receipt signed by an Executive Officer of the Company or the Bank.
    The frequency of payment of the premium is indicated in the Policy Schedule.
    The premium amount stated in the Policy Schedule or any other subsequent endorsement is considered agreed by all the parties of the contract.
    If any premium shall have been paid before the date it falls due and if the insured dies before the said date, this advance premium shall be paid to the Beneficiary as part of the proceeds of this Contract.
    In case of non settlement of any due premium on time, the cover situation will be subject to the Code of Obligations and Contracts.`,
    'Clause 4 – GRACE PERIOD': `A period of 10 days shall be granted for the payment of every premium after the first, during which period of grace the insurance shall continue in force. If death occurs within the period of grace, the overdue premium shall be deducted from the indemnity amount payable hereunder.
    Failure to pay any premium before the expiration of its relative grace period shall constitute a default in premium payment and this contract shall lapse automatically and be considered as unpaid.`,
    'Clause 5 - PROOF OF CLAIM': `Before effecting any claim payment, the Company may require specific documents including (but not restricted to) satisfactory proof of the claim, official death certificate, a medical report from the attending physician or other documents the Company considers necessary…
    The Policyholder and /or the Beneficiaries shall give the Company a written advice of the death of the Insured within 60 days period as from the date of death; otherwise the claim will be considered as void.
    The Company reserves the right to ask about any document which can be considered by its claims department as necessary for the payment of the indemnity.`,
    'Clause 6 - CONCLUSION OF INSURANCE CONTRACT': `The insurance contract includes a declaration of good health duly signed by the Policyholder and the Insured regarding the effected insurance. Both the policyholder and the insured are obliged to give true and complete answers to all questions. Knowingly untruthful or incomplete answers may result in withdrawal from the contract or refusal or reduction of benefit or refusal of waiver of premium payment. Written questions of the Company related to the conclusion of the contract include questions concerning the state of health of the policyholder and the insured as well as other questions necessary for the conclusion of the contract. 
    The Company is entitled to review the state of health of the individual concerned on the basis of reports requested with the individual's consent from health care institutions where he was cured as well as through an examination by a doctor appointed by the Company. 
    The Company is allowed to use the information obtained while determining the state of health of individuals exclusively for its own needs.`,
    'Clause 7 - EXCLUSIONS':
      'The Company shall not be liable to pay any claim arising directly or indirectly from the following cases:',
    list: [
      `Suicide or attempted suicide, during the first two years of this contract's period starting from the effective date or any attempted self injury or physical harm or an exposure to an exceptional danger, while the insured is sane or insane.`,
      `Legal execution, death sentence of the insured person during the first two years of this contract's period starting from the effective date, any resistance to legal arrest or any kind of violation of law.`,
      'Any claim arising when the insured is under the effect of alcohol or drugs.',
      'Any case related directly or indirectly to any kind of mental or psychological disorder.',
      'War events, war like operations (declared or not), civil war, invasion, hostilities, act of foreign enemy, rebellion, revolution, strikes, riots, civil commotion, insurrection,  military or usurped power or any of the events or causes that determines the proclamation or maintenance of martial law or state of siege, or as a result of murder, assault or any attempt thereat, conspiracy, sabotage, terrorism, military or police service',
      'Flying other than a paying passenger on a civil aviation in a licensed aircraft operated by a recognized Airline on a regular route.',
      'Any case related to pregnancy, childbirth, miscarriage, abortion, fertility related procedures and any non-malignant disease occurring in or in connection with the female of reproduction, and any delivery including C-section, or any complication arising hereof.',
      'HIV, AIDS or any sexual transmitted and / or Venereal Diseases.',
      'Ionizing radiations or contamination by radioactivity or any act of nuclear, chemical, biological terrorism, pathogenic disease, micro-organism or biologically produced toxins.',
      'Any kind of hazardous activities including (but not restricted to): motorcycling, any kind of racing or rallies, competitions, bets, record breaking attempt, deep sea diving, scuba-diving, mountaineering or rock climbing, caving, hunting, hiking, snorkeling, parachuting, hang gliding, delta-plane, skiing, snorkeling, surfing, rafting, skeleton, boxing, wrestling, karate, acrobatics, aerial demonstrations, bungee jumping, horse racing…',
      'Any case related to a past medical history of the insured before the effective date of the contract or any expenses foreseen before the conclusion of this contract.',
      'Any case resulting directly or indirectly from the change of the insured’s residence or hobbies or occupation or travel not clearly notified and agreed by the Company.',
      'Any case, sickness or ailment diagnosed or treated by medication or otherwise before the effective date of the policy (pre-existing).',
      'Any congenital disease or physical/mental abnormality and its consequences (including hospitalization).',
      'The committing or attempting to commit or the aiding or abetting by the insured person of any unlawful act even it, in doing so, there was no intention by the insured person to cause himself injury or illness.',
      'Any illegal act, breach of law or criminal acts committed by the insured.',
      'Any occupational or work-related injuries not directly resulting from an accident',
    ],
    'Clause 8 - RETICENCE': `Any incorrect declaration by the Policyholder and / or the insured, or any hidden information regarding the correct age, profession, health, travel or any kind, in the application form, will force the Company to consider this contract as void with no further force and effect, and retain the paid premiums, as per the Lebanese Codes of Obligations and Contracts. If the discovery of such omission or false declaration occurs after this contract becomes a claim by death, the Company will not be liable to pay any amount.`,
    'Clause 9 - JURISDICTION': `This contract is governed by the laws of the Republic of Lebanon. Any dispute or differences arising out of this contract shall be governed by the Lebanese courts exclusively.`,
  },
};

const clause10 = {
  'ACC-02': `The sum insured of this policy is calculated on a decreasing basis, covering an amount of USD 1,000.- per year till the last academic year of his school journey. The cover ceases automatically once the student faces a class repeat more than 1 time
      during this whole stage.`,
  'ACC-03': [
    'The Hospital Cash Benefit is limited to 15 days/stay/year.',
    'The HCB is subject to a deductible being the first 2 days of hospitalization (days and nights).',
    'This policy is subject to a waiting period of 15 days from the policy starting date. During this period, no cover is granted.',
    'Coverage is granted after the premium is paid (annual or monthly). If the insured fails to pay his premium (annual or monthly) within a maximum of 10 days after the policy starting date, the policy becomes null and void and no coverage will attach without the need for any notifications or warnings. ',
  ],
};
export { setting, commonTerms, clause10 };
