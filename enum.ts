enum Membereship {
    Simple,
    Standart,
    Premium
}

const membership = Membereship.Standart
const membershipReverse = Membereship[2]
console.log(membership);
console.log(membershipReverse);

enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM
console.log(social);
