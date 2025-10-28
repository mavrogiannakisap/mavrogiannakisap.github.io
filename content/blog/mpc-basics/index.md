---
title: "Secure Multi-Party Computation: Computing on Encrypted Data"
summary: Understanding the basics of MPC and how it enables privacy-preserving computation
authors:
  - admin
tags:
  - Cryptography
  - MPC
  - Privacy
  - Tutorial
categories:
  - Technical Writing
date: '2024-02-20T00:00:00Z'
lastmod: '2024-02-20T00:00:00Z'
featured: true
draft: false

image:
  caption: 'MPC illustration'
  focal_point: ''
  preview_only: false

projects: []
---

## The Millionaire's Problem

Imagine two millionaires meet and want to know who is richer, but neither wants to reveal their actual wealth. This classic problem, posed by Andrew Yao in 1982, illustrates the core challenge of **Secure Multi-Party Computation (MPC)**.

## What is MPC?

MPC allows multiple parties to jointly compute a function over their private inputs **without revealing those inputs** to each other. The result is revealed, but nothing else.

Formally: Parties P₁, P₂, ..., Pₙ with private inputs x₁, x₂, ..., xₙ want to compute:

```
f(x₁, x₂, ..., xₙ) = y
```

Such that:
1. All parties learn the output y
2. No party learns anything about others' inputs beyond what's revealed by y
3. The computation is correct even if some parties are malicious

## Real-World Applications

### Healthcare Analytics
Multiple hospitals want to analyze patient data to find disease correlations:
- Each hospital has sensitive patient records
- Regulations (HIPAA) prevent sharing raw data
- MPC allows joint analysis without data sharing

### Financial Risk Assessment
Banks want to assess systemic risk:
- Each bank has proprietary trading data
- Revealing positions to competitors is unacceptable
- MPC enables risk calculation while preserving confidentiality

### Privacy-Preserving Machine Learning
Companies want to train ML models on combined datasets:
- Data is valuable and sensitive
- Centralized collection raises privacy concerns
- MPC enables collaborative training

## MPC Techniques

### 1. Garbled Circuits

Yao's garbled circuits represent computation as a Boolean circuit with encrypted gates.

```python
# Simplified example: AND gate
def garble_AND_gate(input1, input2):
    # Generate random "labels" for wires
    labels_A = {0: random_bits(), 1: random_bits()}
    labels_B = {0: random_bits(), 1: random_bits()}
    labels_C = {0: random_bits(), 1: random_bits()}

    # Create garbled truth table
    garbled_table = [
        encrypt(labels_A[0] + labels_B[0], labels_C[0]),  # 0 AND 0 = 0
        encrypt(labels_A[0] + labels_B[1], labels_C[0]),  # 0 AND 1 = 0
        encrypt(labels_A[1] + labels_B[0], labels_C[0]),  # 1 AND 0 = 0
        encrypt(labels_A[1] + labels_B[1], labels_C[1]),  # 1 AND 1 = 1
    ]

    # Shuffle to hide which entry is which
    shuffle(garbled_table)

    return garbled_table
```

**Pros**: Constant round complexity (very low latency)
**Cons**: High communication cost, circuit size grows with computation

### 2. Secret Sharing

Data is split into "shares" distributed among parties. Computation happens on shares.

```python
# Additive secret sharing example
def share_secret(secret, num_parties):
    """Split secret into random shares that sum to secret"""
    shares = [random_int() for _ in range(num_parties - 1)]
    shares.append(secret - sum(shares))  # Last share ensures sum = secret
    return shares

def add_shared_values(shares_a, shares_b):
    """Add two secret-shared values"""
    # Each party locally adds their shares
    return [a + b for a, b in zip(shares_a, shares_b)]

# Example usage
secret_x = 42
secret_y = 17

shares_x = share_secret(secret_x, 3)  # [15, 38, -11]
shares_y = share_secret(secret_y, 3)  # [22, -8, 3]

shares_sum = add_shared_values(shares_x, shares_y)  # [37, 30, -8]
result = sum(shares_sum)  # 59 = 42 + 17
```

**Pros**: Efficient for arithmetic operations
**Cons**: Requires multiple rounds of communication

### 3. Homomorphic Encryption

Allows computation on encrypted data:

```python
# Using partially homomorphic encryption (e.g., Paillier)
# which supports addition on encrypted values

plaintext_a = 15
plaintext_b = 27

# Encrypt
ciphertext_a = encrypt(plaintext_a)
ciphertext_b = encrypt(plaintext_b)

# Compute on encrypted data
ciphertext_sum = homomorphic_add(ciphertext_a, ciphertext_b)

# Decrypt result
result = decrypt(ciphertext_sum)  # 42
```

**Pros**: Minimal interaction (sometimes non-interactive)
**Cons**: Computationally expensive, limited operations

## Hybrid Approaches

Modern MPC systems combine techniques for optimal performance:

- Use **garbled circuits** for boolean logic (comparisons, branching)
- Use **secret sharing** for arithmetic operations
- Use **homomorphic encryption** to reduce interaction

This is the approach my research takes!

## Security Models

### Semi-Honest (Passive) Security
- Parties follow the protocol but try to learn extra information
- Easier to achieve, better performance
- Suitable when participants are trusted but curious

### Malicious (Active) Security
- Parties may deviate arbitrarily from the protocol
- Requires expensive verification (zero-knowledge proofs)
- Necessary for adversarial settings

## Performance Considerations

Typical MPC overheads:
- **Computation**: 1000-10000x slower than plaintext
- **Communication**: Gigabytes for complex functions
- **Latency**: Seconds to minutes for non-trivial computations

This is why my research focuses on making MPC practical!

## Try It Yourself

Want to experiment with MPC? Check out these libraries:

1. **MP-SPDZ**: General-purpose MPC framework
2. **EMP-toolkit**: Efficient implementation of garbled circuits
3. **MOTION**: Modern hybrid MPC framework

## Further Reading

- [Yao's Millionaire Problem](https://research.cs.wisc.edu/areas/sec/yao1982-ocr.pdf) - The original paper
- [Practical MPC Tutorial](https://eprint.iacr.org/2020/300) - Comprehensive guide
- [MPC in Practice](https://www.mpcalliance.org/) - Real-world applications

## Next Steps

In the next post, I'll cover **Privacy-Preserving Machine Learning** and how MPC enables collaborative model training!

---

*Questions or comments? Reach out on [GitHub](https://github.com/mavrogiannakisap) or via email!*
