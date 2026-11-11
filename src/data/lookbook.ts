import { ProductId } from './products';

export interface LookbookFrame {
  images: string[];
  alt: string;
  productId: ProductId;
  offsetMs?: number;
}

export const LOOKBOOK_HERO_IMAGES = [
  '/assets/aistudio/LOOKBOOK_1_b1e27d43.png',
  '/assets/aistudio/LOOKBOOK_16_db9f3096.png',
];

export const LOOKBOOK_TRIPTYCH_1: LookbookFrame[] = [
  {
    images: [
      '/assets/aistudio/LOOKBOOK_2.1_550a3712.png',
      '/assets/aistudio/LOOKBOOK_13.2_dd66d0fa.png',
      '/assets/aistudio/LOOKBOOK_8.2_1049ed08.png',
    ],
    alt: 'Maginhawa Chelsea Boots editorial look',
    productId: 'p4',
    offsetMs: 0,
  },
  {
    images: [
      '/assets/aistudio/LOOKBOOK_2.2_ba4dee27.png',
      '/assets/aistudio/LOOKBOOK_15.2_d84912af.png',
      '/assets/aistudio/LOOKBOOK_8.1_685b08a9.png',
    ],
    alt: 'Maginhawa Tabi Loafers editorial look',
    productId: 'p5',
    offsetMs: 800,
  },
  {
    images: [
      '/assets/aistudio/LOOKBOOK_2.3_16eea46f.png',
      '/assets/aistudio/LOOKBOOK_12_45336623.png',
      '/assets/aistudio/LOOKBOOK_8.4_163c4e44.png',
    ],
    alt: 'Maginhawa Black Chelsea Boots editorial look',
    productId: 'p4',
    offsetMs: 1600,
  },
];

export const LOOKBOOK_LUXURY_FRAMES: LookbookFrame[] = [
  {
    images: [
      '/assets/aistudio/LOOKBOOK_3.1_92dbe649.png',
      '/assets/aistudio/LOOKBOOK_15.1_3c3095cd.png',
    ],
    alt: 'Burgundy Crocodile Tabi Loafers lifestyle pose',
    productId: 'p5',
    offsetMs: 0,
  },
  {
    images: [
      '/assets/aistudio/LOOKBOOK_3.2_a70e51c0.png',
      '/assets/aistudio/LOOKBOOK_1_b1e27d43.png',
    ],
    alt: 'Maginhawa footwear collection spread',
    productId: 'p1',
    offsetMs: 1200,
  },
];

export const LOOKBOOK_CASUAL_COLLAGE: LookbookFrame[] = [
  {
    images: [
      '/assets/aistudio/LOOKBOOK_4.1_f0ec4ce7.png',
      '/assets/aistudio/HOME_PAGE_6.1_e74b821c.png',
      '/assets/aistudio/HOME_PAGE_6.2_1b82196d.png',
    ],
    alt: 'Close-up leather detail',
    productId: 'p1',
    offsetMs: 0,
  },
  {
    images: [
      '/assets/aistudio/LOOKBOOK_4.2_21edb03d.png',
      '/assets/aistudio/LOOKBOOK_13.2_dd66d0fa.png',
    ],
    alt: 'Tan Chelsea Boots on wooden chair',
    productId: 'p4',
    offsetMs: 900,
  },
  {
    images: [
      '/assets/aistudio/LOOKBOOK_4.3_7837a4dc.png',
      '/assets/aistudio/LOOKBOOK_8.3_7f96fcea.png',
    ],
    alt: 'Streetwear styling with Tabi Loafers',
    productId: 'p5',
    offsetMs: 1500,
  },
];

export const LOOKBOOK_EFFORTLESS_COLLAGE: LookbookFrame[] = [
  {
    images: [
      '/assets/aistudio/LOOKBOOK_5.1_3fd36923.png',
      '/assets/aistudio/LOOKBOOK_9.3_9dcf5862.png',
    ],
    alt: 'Leather Mule with white socks',
    productId: 'p1',
    offsetMs: 0,
  },
  {
    images: [
      '/assets/aistudio/LOOKBOOK_5.2_35109df1.png',
      '/assets/aistudio/LOOKBOOK_9.1_1f3e81ae.png',
    ],
    alt: 'Pleated Penny Mule street look',
    productId: 'p2',
    offsetMs: 700,
  },
  {
    images: [
      '/assets/aistudio/LOOKBOOK_5.3_b5f5d2a2.png',
      '/assets/aistudio/LOOKBOOK_7.1_9f482571.png',
    ],
    alt: 'Tailored trousers with Maginhawa loafers',
    productId: 'p3',
    offsetMs: 1400,
  },
  {
    images: [
      '/assets/aistudio/LOOKBOOK_5.4_36d8a4cd.png',
      '/assets/aistudio/LOOKBOOK_7.3_b16cf3e6.png',
    ],
    alt: 'Burgundy Leather Mule detail',
    productId: 'p1',
    offsetMs: 2100,
  },
];

export const LOOKBOOK_MULE_FEATURE: LookbookFrame = {
  images: [
    '/assets/aistudio/LOOKBOOK_6_9d9f3616.png',
    '/assets/aistudio/LOOKBOOK_7.3_b16cf3e6.png',
    '/assets/aistudio/LOOKBOOK_9.2_fb2f13c6.png',
  ],
  alt: 'Marikina Leather Mule editorial portrait',
  productId: 'p1',
};

export const LOOKBOOK_TRIPTYCH_2: LookbookFrame[] = [
  {
    images: [
      '/assets/aistudio/LOOKBOOK_7.1_9f482571.png',
      '/assets/aistudio/LOOKBOOK_5.3_b5f5d2a2.png',
    ],
    alt: 'Burgundy Leather Mule in dark tailoring',
    productId: 'p1',
    offsetMs: 0,
  },
  {
    images: [
      '/assets/aistudio/LOOKBOOK_7.2_1db05ed1.png',
      '/assets/aistudio/HOME_PAGE_3_14c45ea0.png',
    ],
    alt: 'Black Leather Mule studio portrait',
    productId: 'p1',
    offsetMs: 1000,
  },
  {
    images: [
      '/assets/aistudio/LOOKBOOK_7.3_b16cf3e6.png',
      '/assets/aistudio/LOOKBOOK_6_9d9f3616.png',
    ],
    alt: 'Burgundy Mule with denim cuffs',
    productId: 'p1',
    offsetMs: 1800,
  },
];

export const LOOKBOOK_RUNWAY_STRIP: LookbookFrame[] = [
  {
    images: [
      '/assets/aistudio/LOOKBOOK_8.1_685b08a9.png',
      '/assets/aistudio/LOOKBOOK_8.5_57a27e92.png',
    ],
    alt: 'Lookbook styling 1 — Pleated Penny Mule',
    productId: 'p2',
    offsetMs: 0,
  },
  {
    images: [
      '/assets/aistudio/LOOKBOOK_8.2_1049ed08.png',
      '/assets/aistudio/LOOKBOOK_8.4_163c4e44.png',
    ],
    alt: 'Lookbook styling 2 — Pleated Penny Mule',
    productId: 'p2',
    offsetMs: 600,
  },
  {
    images: [
      '/assets/aistudio/LOOKBOOK_8.3_7f96fcea.png',
      '/assets/aistudio/LOOKBOOK_4.3_7837a4dc.png',
    ],
    alt: 'Lookbook styling 3 — Soft Leather Loafer',
    productId: 'p3',
    offsetMs: 1200,
  },
  {
    images: [
      '/assets/aistudio/LOOKBOOK_8.4_163c4e44.png',
      '/assets/aistudio/LOOKBOOK_8.2_1049ed08.png',
    ],
    alt: 'Lookbook styling 4 — Chelsea Boots',
    productId: 'p4',
    offsetMs: 1800,
  },
  {
    images: [
      '/assets/aistudio/LOOKBOOK_8.5_57a27e92.png',
      '/assets/aistudio/LOOKBOOK_8.1_685b08a9.png',
    ],
    alt: 'Lookbook styling 5 — Tabi Loafers',
    productId: 'p5',
    offsetMs: 2400,
  },
];

export const LOOKBOOK_TRIPTYCH_3: LookbookFrame[] = [
  {
    images: [
      '/assets/aistudio/LOOKBOOK_9.1_1f3e81ae.png',
      '/assets/aistudio/LOOKBOOK_5.2_35109df1.png',
    ],
    alt: 'Black Loafers with white socks',
    productId: 'p3',
    offsetMs: 0,
  },
  {
    images: [
      '/assets/aistudio/LOOKBOOK_9.2_fb2f13c6.png',
      '/assets/aistudio/LOOKBOOK_9.3_9dcf5862.png',
    ],
    alt: 'Burgundy Penny Mule on concrete ledge',
    productId: 'p2',
    offsetMs: 1000,
  },
  {
    images: [
      '/assets/aistudio/LOOKBOOK_9.3_9dcf5862.png',
      '/assets/aistudio/LOOKBOOK_5.1_3fd36923.png',
    ],
    alt: 'Espresso Penny Mule skyline view',
    productId: 'p2',
    offsetMs: 2000,
  },
];

export const LOOKBOOK_LOAFER_FEATURE: LookbookFrame = {
  images: [
    '/assets/aistudio/LOOKBOOK_10_9204d1e2.png',
    '/assets/aistudio/LOOKBOOK_11.1_c630f759.png',
    '/assets/aistudio/LOOKBOOK_11.2_e67e31a7.png',
  ],
  alt: 'Soft Leather Loafer collapsible heel profile',
  productId: 'p3',
};

export const LOOKBOOK_LOAFER_PAIR: LookbookFrame[] = [
  {
    images: [
      '/assets/aistudio/LOOKBOOK_11.1_c630f759.png',
      '/assets/aistudio/LOOKBOOK_10_9204d1e2.png',
    ],
    alt: 'Soft Leather Loafer upright view',
    productId: 'p3',
    offsetMs: 0,
  },
  {
    images: [
      '/assets/aistudio/LOOKBOOK_11.2_e67e31a7.png',
      '/assets/aistudio/LOOKBOOK_10_9204d1e2.png',
    ],
    alt: 'Soft Leather Loafer folded heel view',
    productId: 'p3',
    offsetMs: 1500,
  },
];

export const LOOKBOOK_BOOTS_FEATURE: LookbookFrame = {
  images: [
    '/assets/aistudio/LOOKBOOK_12_45336623.png',
    '/assets/aistudio/LOOKBOOK_4.2_21edb03d.png',
  ],
  alt: 'Marikina Chelsea Boots editorial',
  productId: 'p4',
};

export const LOOKBOOK_BOOTS_PAIR: LookbookFrame[] = [
  {
    images: [
      '/assets/aistudio/LOOKBOOK_13.1_9a3e1f30.png',
      '/assets/aistudio/LOOKBOOK_2.3_16eea46f.png',
    ],
    alt: 'Black Chelsea Boots street view',
    productId: 'p4',
    offsetMs: 0,
  },
  {
    images: [
      '/assets/aistudio/LOOKBOOK_13.2_dd66d0fa.png',
      '/assets/aistudio/LOOKBOOK_2.1_550a3712.png',
    ],
    alt: 'Tan Chelsea Boots on stone steps',
    productId: 'p4',
    offsetMs: 1500,
  },
];

export const LOOKBOOK_TABI_FEATURE: LookbookFrame = {
  images: [
    '/assets/aistudio/LOOKBOOK_14_5848418c.png',
    '/assets/aistudio/LOOKBOOK_15.1_3c3095cd.png',
  ],
  alt: 'Tabi Loafers on cobblestone',
  productId: 'p5',
};

export const LOOKBOOK_TABI_PAIR: LookbookFrame[] = [
  {
    images: [
      '/assets/aistudio/LOOKBOOK_15.1_3c3095cd.png',
      '/assets/aistudio/LOOKBOOK_14_5848418c.png',
    ],
    alt: 'Burgundy Tabi Loafers editorial',
    productId: 'p5',
    offsetMs: 0,
  },
  {
    images: [
      '/assets/aistudio/LOOKBOOK_15.2_d84912af.png',
      '/assets/aistudio/LOOKBOOK_3.1_92dbe649.png',
    ],
    alt: 'Forest Green Tabi Loafers editorial',
    productId: 'p5',
    offsetMs: 1500,
  },
];
