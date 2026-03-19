/**
 * Downloads Google lh3 images and converts them to WebP.
 * Run: node scripts/download-images.mjs
 */
import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const sharp = require("sharp");

const OUT = "public/images";
mkdirSync(OUT, { recursive: true });

const IMAGES = [
  {
    name: "hero-desktop",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBswblmMmSvckhQ6bcl7-wkOZ7uBITc1k3rxKSWxm15AaQZFES7sUG6j05OmPcldaukcYjqFIohzcpA_ImuWWMePcS5X_t1zZIBdreB1WG-oOUazZXAGpM1VhT_WXX6llsjXfyUuX4XJ_RPLSl8aJ9tkhCd8b3PlZRRgm_oFloN9ThXBJiRxdfhEU9qsdv3LKzzYFW1opPxBo45ocBRME5b7Crce-QEo1Qyxd7nmrA8_MlAdw40UQ_tjPwqHZIfm7loLg59oUJOscE=w960",
    width: 960,
  },
  {
    name: "hero-mobile",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFD2qu-EGNxAyjdb0j_txxs592hQmp8B5tmknHhKyiWiXuwQ_Gp9CtUq-X3K6yXKbX0VeM27KG53TWNKlrZ0Z2OO961rFmmzwUqSu_pQZHr_G4UI3dNw0ciTetArEEBVkt6-qKFW5ndqH1f1l4uAkfoOFm5GAlG99Z8_gtItsYROpovJuQ6UInzNAYwUulFutIxIvdno9cHIfCfJdxeXVitk8dda0tNbdjBnDXtuFwIZS7ydVDt9fW9Q5zylU6PPRh79UFbkRvS24=w480",
    width: 480,
  },
  {
    name: "krypton-os",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_H9up35lsfy0y5JjqORagLTMXvD42AsZS8XVmm0JmpR1FHrEoH0-nJmWsORxelffo1b6Omi8uhs2Bs5msvGDA_oRKsx9KpMHWRjx5OhmjUy_yFTxq0k1zgtWwr0wtt6JDf7iAp-Ao7fmqoFS-g-CL5ms6avWHmxlCTFfdccwRq3W8yLVM9FBR-yZ22NETzAJtGiKUhNfe3QtK4dAmNbWpPZV6kFV5ylnTX8Alx67U6XEhK_DyZD58fiL24z45H9rzoyK2x9tTSwQ=w960",
    width: 960,
  },
  {
    name: "flux-identity",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZQFujrSQZD3JAQoD_wiuxPekHtbX_FVq4oY_uB85Ct1n23Knb7hj9xfN9nhP8z17n8O907BFdQUVxN3Y9ylFCM1sShSWV96gix-qaKAT2jxt1k2ySutICzwzxNJNReeDI7ykqJilPaLYF_iRYwAyNEf_LtDIclvFj7rUSUz5cPSi_35BFWKq_umHfgYmWKAYi6M93eQ5m-mimIkyrxCtdwgKAAYlPs0b777w5UjqMdA6jV-8pqTm65OwbeQ4UW6cLa7zlb8Pt9-M=w960",
    width: 960,
  },
  {
    name: "lumina-identity",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4kxOyMbVvrKENj7wxyx86M5JXNQmCX6Iu0BMXDAAniFJ4aX-kyRuKe_Ok6WfCQ1KExK5gBYvFrCUooFbbT9JTzmU4EvgeNRQogDFnF6_OqeiO3ZKT46IFUjS4j0zXqtJZS7vNz6Gy8Sqm9I_z6tiWdQHCb11cjVdm-tnkAiZHCIPCdjKQGvhXfCmyNmN-Wbcvvj7gQdyzv0enalOc2jBCur3BowTw7tRq-duoBDqfKeoeQXXnyuve9vj1G3B_hGuSjOFptaMcaeA=w960",
    width: 960,
  },
  {
    name: "veyro-motion",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCGNWR-zxM4jEsFspb4g3_4Aa4-Y6Xuskf4V96jN32bhArfdrigu-wYFCZ0t5DYiCBXvt3QH0TJV7tXMZgYOm1p1oTsKV0OQpTax2OD7q0p6ad6D2sKDjIAa_35at_9e8xI6J9lxXyjVE0QRpLxeYsk1L_MtPbPABkESIv6Nhh8ZE_0S6mbDqgLw2g0xKyGwxqOb6XXbwRgxgY5Hbkz3qgSxNLSVMIgRHxkPoI6Nr-ldLeG6JSEneGlWdPtg8vJX3zf51dFn77L54=w960",
    width: 960,
  },
];

for (const { name, url, width } of IMAGES) {
  console.log(`Downloading ${name}...`);
  const res = await fetch(url);
  const buf = Buffer.from(await res.arrayBuffer());
  const originalKB = (buf.length / 1024).toFixed(1);

  const webp = await sharp(buf).resize(width).webp({ quality: 82 }).toBuffer();
  const webpKB = (webp.length / 1024).toFixed(1);

  const outPath = join(OUT, `${name}.webp`);
  writeFileSync(outPath, webp);
  console.log(`  ${originalKB} KiB → ${webpKB} KiB (${name}.webp)`);
}

console.log("\nDone! Update image references in source code.");
