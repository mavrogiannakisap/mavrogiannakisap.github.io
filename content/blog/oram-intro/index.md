---
title: "Introduction to Oblivious RAM (ORAM): Hiding Access Patterns"
summary: A beginner-friendly introduction to ORAM and why it matters for privacy
authors:
  - admin
tags:
  - Cryptography
  - ORAM
  - Privacy
  - Tutorial
categories:
  - Technical Writing
date: '2024-03-15T00:00:00Z'
lastmod: '2024-03-15T00:00:00Z'
featured: true
draft: false

# Featured image
image:
  caption: 'ORAM concept illustration'
  focal_point: ''
  preview_only: false

# Projects (optional).
projects: []
---

## What is ORAM?

Oblivious RAM (ORAM) is a cryptographic primitive that allows a client to hide its data access patterns when interacting with untrusted storage. While encryption protects the *content* of data, ORAM protects *which* data is being accessed — a crucial distinction for privacy.

## Why Do Access Patterns Matter?

Consider storing your encrypted emails on a cloud server. Even though the server can't read the content, it can observe patterns:
- You access email #42 every Monday morning (likely your weekly team meeting notes)
- You frequently access emails #100-110 together (perhaps a conversation thread about a sensitive project)
- You rarely access emails from 2015 but frequently access recent ones

These patterns leak significant information about your behavior and interests, even without seeing the actual content!

## The ORAM Guarantee

An ORAM scheme ensures that any two sequences of data accesses are **computationally indistinguishable** to an observer. In other words, accessing email #1 looks identical to accessing email #1000.

## How Does ORAM Work?

The basic idea involves:

1. **Encryption**: All data blocks are encrypted
2. **Shuffling**: Blocks are continuously shuffled and reorganized
3. **Dummy Accesses**: Real accesses are mixed with fake ones
4. **Position Maps**: Client maintains metadata mapping logical addresses to physical locations

### Simple Example: Square Root ORAM

One of the earliest ORAM constructions works as follows:

```python
# Simplified pseudocode for Square Root ORAM
class SquareRootORAM:
    def __init__(self, N):
        self.server_storage = [encrypt(block_i) for i in range(N)]
        self.client_cache = {}
        self.access_count = 0

    def access(self, block_id):
        # 1. If in cache, retrieve from there
        if block_id in self.client_cache:
            data = self.client_cache[block_id]
        else:
            # Download from server
            data = download_and_decrypt(block_id)
            self.client_cache[block_id] = data

        # 2. Increment access counter
        self.access_count += 1

        # 3. Periodically shuffle everything
        if self.access_count >= sqrt(N):
            self.reshuffle_all_blocks()
            self.client_cache = {}
            self.access_count = 0

        return data
```

The key insight: after √N accesses, we shuffle everything, making it impossible to link accesses across shuffle periods.

## Modern ORAM Constructions

Square Root ORAM is simple but inefficient. Modern constructions like **Path ORAM** and **Circuit ORAM** achieve much better performance:

- **Path ORAM**: Organizes blocks in a tree structure, accessing one path per operation
  - Communication: O(log N) blocks per access
  - Client storage: O(1) blocks

- **Circuit ORAM**: Optimized for secure computation applications
  - Minimized client storage
  - Constant number of sequential scans

## Real-World Applications

ORAM isn't just theoretical. It's used in:

1. **Private Cloud Storage**: Services like ObliviStore
2. **Secure Processors**: Intel SGX with ORAM for hiding memory access patterns
3. **Secure Multi-Party Computation**: Hiding which inputs are being processed
4. **Privacy-Preserving Databases**: SQL queries without revealing query patterns

## The Performance Challenge

The main barrier to ORAM adoption is overhead:
- **Communication**: Even the best schemes require O(log N) communication per access
- **Computation**: Encryption/decryption for every access
- **Latency**: Multiple round-trips to the server

My research focuses on reducing these overheads to make ORAM practical for real-world systems!

## Further Reading

- [Goldreich & Ostrovsky, "Software Protection and Simulation on Oblivious RAMs"](https://dl.acm.org/doi/10.1145/233551.233553) - The original ORAM paper
- [Path ORAM Paper](https://eprint.iacr.org/2013/280) - One of the most practical constructions
- [ORAM Survey](https://arxiv.org/abs/1601.03155) - Comprehensive overview of ORAM techniques

## Questions?

Feel free to reach out if you have questions about ORAM or want to discuss potential applications!

---

*This post is part of a series on privacy-preserving systems. Next up: Secure Multi-Party Computation basics.*
