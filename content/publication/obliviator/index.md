---
title: "OBLIVIATOR: Oblivious Parallel Joins and Other Operators"

authors:
- admin
- Xian Wang 
- Ioannis Demertzis
- Dimitrios Papadopoulos
- Minos Garofalakis

author_notes:
- "Equal contribution"
- "Equal contribution"

date: "2025-08-15T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2025-08-15T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["paper-conference"]

# Publication name and optional abbreviated publication name.
publication: "*USENIX Security*, 2025"

abstract: A novel framework for executing oblivious database operators in shared-memory environments using Intel SGX trusted execution environments (TEEs)

tags:
- Cryptography
- Confidential Computing
- Databases
- Hardware Enclaves

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
links:
- name: ePrint
  url: https://eprint.iacr.org/2025/183
- name: Code
  url: https://zenodo.org/records/14723872
url_pdf: 'https://www.usenix.org/conference/usenixsecurity25/presentation/mavrogiannakis'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: ''
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
projects: []

# Slides (optional).
slides: ""
---

## Paper's Abstract

We introduce oblivious parallel operators designed for both non-foreign key and foreign key equi-joins. Obliviousness ensures nothing is revealed about the data besides input/output sizes, even against a strong adversary that can observe memory access patterns. Our solution achieves this by combining trusted hardware with efficient oblivious primitives for compaction and sorting, and two oblivious algorithms, (i)an oblivious aggregation tree, which can be described as a variation of the parallel prefix sum, customized for trusted hardware, and (ii) a novel algorithm for obliviously expanding the elements of a relation. In the sequential setting, our oblivious join performs 4.6x-5.14x faster than the prior state-of-the-art solution (Krastnikov et al., VLDB 2020) on datasets of 1M tuples. In the parallel setting, our algorithm achieves a speedup of up to roughly 16x over the sequential version, when running with 32 threads (becoming up to 80x compared to the sequential algorithm of Krastnikov et al). Finally, our oblivious operators can be used independently to support other oblivious database queries, such as oblivious selection and oblivious group-by.

## Key Contributions

1. Oblivious Parallel Join Algorithm
    - First practical oblivious join operator that scales to large
  datasets
    - Achieves parallelism in secure enclaves while hiding access
  patterns
    - Significantly faster than prior ORAM-based approaches
2. **Extended Operator Suite**
    - Beyond joins: group-by, aggregation, sorting, and other database
   primitives
    - All operators maintain obliviousness (hide access patterns)
3. **Performance Evaluation**
    - Extensive benchmarks on real-world datasets
    - Orders of magnitude faster than state-of-the-art oblivious
   systems
    - Demonstrates practical feasibility for production database workloads
4. **Security Analysis**
    - Formal security proofs showing obliviousness guarantees
    - Protection against access pattern leakage even with compromised OS

## Citation

```bibtex
@article{mavrogiannakis2025obliviator,
  title={Obliviator: Oblivious parallel joins and other operators in shared memory environments},
  author={Mavrogiannakis, Apostolos and Wang, Xian and Demertzis, Ioannis and Papadopoulos, Dimitrios and Garofalakis, Minos},
  journal={Cryptology ePrint Archive},
  year={2025}
}
```
