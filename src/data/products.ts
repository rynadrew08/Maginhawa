export type ProductId = 'p1' | 'p2' | 'p3' | 'p4' | 'p5';

export interface ProductColorVariant {
  name: string;
  hex: string;
  images: {
    main: string;
    top: string;
    side: string;
  };
}

export interface Product {
  id: ProductId;
  code: string;
  bannerTitle: string;
  catalogTitle: string;
  brandLine: string;
  modelLine: string;
  description: string[];
  material: string;
  price: string;
  catalogImage: string;
  colors: ProductColorVariant[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    code: 'P1',
    bannerTitle: 'Leather Mule',
    catalogTitle: 'Marikina Mule',
    brandLine: 'Marikina',
    modelLine: 'Leather Mule',
    description: [
      "a versatile footwear piece crafted from genuine leather and inspired by Marikina's rich shoemaking heritage",
      'a balance of chic aesthetics, refined craftsmanship, and everyday comfort',
    ],
    material:
      'Genuine top-grain cowhide leather upper, Soft leather lining, cushioned foam insole covered with leather, and durable rubber outsole',
    price: '₱3,490.00',
    catalogImage: '/assets/aistudio/PRODUCTS_2_74679cf9.png',
    colors: [
      {
        name: 'Obsidian Black',
        hex: '#141414',
        images: {
          main: '/assets/aistudio/P1_LEATHER_MULE_B1_d0e88b03.png',
          top: '/assets/aistudio/P1_LEATHER_MULE__B2_73e07a5c.png',
          side: '/assets/aistudio/P1_LEATHER_MULE__B3_eba93209.png',
        },
      },
      {
        name: 'Burgundy',
        hex: '#4E1A20',
        images: {
          main: '/assets/aistudio/P1_LEATHER_MULE_R1_08d9739f.png',
          top: '/assets/aistudio/P1_LEATHER_MULE__R2_a08d6ba3.png',
          side: '/assets/aistudio/P1_LEATHER_MULE__R3_ed8509a8.png',
        },
      },
      {
        name: 'Dark Espresso',
        hex: '#3E2723',
        images: {
          main: '/assets/aistudio/P1_LEATHER_MULE_W1_c6969492.png',
          top: '/assets/aistudio/P1_LEATHER_MULE__W2_394260c0.png',
          side: '/assets/aistudio/P1_LEATHER_MULE__W3_1db837e7.png',
        },
      },
    ],
  },
  {
    id: 'p2',
    code: 'P2',
    bannerTitle: 'Penny Mule',
    catalogTitle: 'Pleated Penny Mule',
    brandLine: 'Marikina',
    modelLine: 'Penny Mule',
    description: [
      'A modern interpretation of the traditional penny loafer, featuring its recognizable penny strap detail and structured leather construction in a convenient slip-on silhouette',
      'Distinguished by its pleated sole design, this footwear brings together classic elegance and contemporary detailing, making it suitable for both casual and semi-formal occasions',
    ],
    material:
      'Crafted from premium top-grain cowhide leather, complemented by a soft leather interior, foam-cushioned leather-covered insole, and sturdy rubber outsole featuring a unique pleated finish.',
    price: '₱3,690.00',
    catalogImage: '/assets/aistudio/PRODUCTS_3_d4ba4852.png',
    colors: [
      {
        name: 'Obsidian Black',
        hex: '#141414',
        images: {
          main: '/assets/aistudio/P2_PENNY_MULE_B1_eeffd691.png',
          top: '/assets/aistudio/P2_PENNY_MULE__B2_2a1cdb0c.png',
          side: '/assets/aistudio/P2_PENNY_MULE__B3_424d9af9.png',
        },
      },
      {
        name: 'Burgundy',
        hex: '#4E1A20',
        images: {
          main: '/assets/aistudio/P2_PENNY_MULE__R1_f3b9eb14.png',
          top: '/assets/aistudio/P2_PENNY_MULE___R2_a65e4927.png',
          side: '/assets/aistudio/P2_PENNY_MULE__R3_fb5f608a.png',
        },
      },
      {
        name: 'Dark Espresso',
        hex: '#3E2723',
        images: {
          main: '/assets/aistudio/P2_PENNY_MULE__W1_c1c67ce8.png',
          top: '/assets/aistudio/P2_PENNY_MULE__W2_8ee50645.png',
          side: '/assets/aistudio/P2_PENNY_MULE__W3_fa1c9a0e.png',
        },
      },
    ],
  },
  {
    id: 'p3',
    code: 'P3',
    bannerTitle: 'Soft Leather Loafer',
    catalogTitle: 'Soft Daily Loafers',
    brandLine: 'Marikina',
    modelLine: 'Soft Leather Loafer',
    description: [
      'A relaxed leather slip-on designed with a collapsible heel, offering the flexibility to be worn as a traditional loafer or an easy backless shoe',
      'The most laid-back and functional piece in the collection, prioritizing everyday comfort and effortless wearability for various activities, from office hours to casual errands',
    ],
    material:
      'Constructed using supple genuine cowhide leather, with a smooth leather lining, foam-padded insole finished in leather, and flexible rubber sole. Its foldable heel structure provides added versatility and convenience.',
    price: '₱3,290.00',
    catalogImage: '/assets/aistudio/PRODUCTS_5_c130ef07.png',
    colors: [
      {
        name: 'Obsidian Black',
        hex: '#141414',
        images: {
          main: '/assets/aistudio/P3_SOFT_LEATHER_LOAFER_1_335f27be.png',
          top: '/assets/aistudio/P3_SOFT_LEATHER_LOAFER_2_b3b7efef.png',
          side: '/assets/aistudio/P3_SOFT_LEATHER_LOAFER_3_fffabf16.png',
        },
      },
    ],
  },
  {
    id: 'p4',
    code: 'P4',
    bannerTitle: 'Chelsea Boots',
    catalogTitle: 'Marikina Boots',
    brandLine: 'Marikina',
    modelLine: 'Chelsea Boots',
    description: [
      'A refined take on the iconic Chelsea boot, incorporating a clean, structured profile, elastic side gussets, and a practical rear pull-tab for convenient slip-on wear',
      "Combines the enduring appeal of classic leather boots with Marikina's shoemaking tradition, while its padded heel and cushioned footbed ensure comfort without compromising its polished appearance",
    ],
    material:
      'Made with premium top-grain cowhide leather, featuring elastic fabric gussets, a soft leather lining, reinforced padded heel, foam-cushioned leather-covered insole, and hard-wearing rubber outsole.',
    price: '₱4,490.00',
    catalogImage: '/assets/aistudio/PRODUCTS_4_ec67c2a8.png',
    colors: [
      {
        name: 'Cognac Tan',
        hex: '#7A4928',
        images: {
          main: '/assets/aistudio/P4_BOOTS_W1_76836aa0.png',
          top: '/assets/aistudio/P4_BOOTS_W2_7896ba83.png',
          side: '/assets/aistudio/P4_BOOTS_W3_1405e75a.png',
        },
      },
      {
        name: 'Obsidian Black',
        hex: '#141414',
        images: {
          main: '/assets/aistudio/P4_BOOTS_B1_bc4e8164.png',
          top: '/assets/aistudio/P4_BOOTS__B2_8bf1e3ba.png',
          side: '/assets/aistudio/P4_BOOTS_B3_74b57429.png',
        },
      },
    ],
  },
  {
    id: 'p5',
    code: 'P5',
    bannerTitle: 'Tabi Loafers',
    catalogTitle: 'Crocodile Tabi Loafers',
    brandLine: 'Marikina',
    modelLine: 'Tabi Loafers',
    description: [
      'A distinctive limited-edition design that draws inspiration from the Japanese Tabi split-toe silhouette, blending its unconventional form with traditional Marikina leather footwear craftsmanship',
      'Its signature separated toe construction creates an eye-catching statement while preserving the practicality of a slip-on loafer, catering to individuals who appreciate distinctive and fashion-forward footwear',
    ],
    material:
      'Expertly crafted from top-grain cowhide leather, with a supple leather lining, cushioned foam footbed with leather covering, and resilient rubber outsole. The carefully constructed split-toe upper highlights its distinctive Tabi-inspired silhouette.',
    price: '₱4,290.00',
    catalogImage: '/assets/aistudio/PRODUCTS_6_9aef3da4.png',
    colors: [
      {
        name: 'Forest Green',
        hex: '#15472B',
        images: {
          main: '/assets/aistudio/P5_TABI_G1_7a683537.png',
          top: '/assets/aistudio/P5_TABI__G2_cecda135.png',
          side: '/assets/aistudio/P5_TABI__G3_07e4f5ec.png',
        },
      },
      {
        name: 'Burgundy',
        hex: '#4E1A20',
        images: {
          main: '/assets/aistudio/P5_TABI__R1_c0c4211e.png',
          top: '/assets/aistudio/P5_TABI__R2_34cbd368.png',
          side: '/assets/aistudio/P5_TABI__R3_18f0f4f6.png',
        },
      },
    ],
  },
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id.toLowerCase());
}
