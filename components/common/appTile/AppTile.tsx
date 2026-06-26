'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    Typography,
} from '@mui/material';

export type TileSize =
    | 'xxs'
    | 'xs'
    | 's'
    | 'm'
    | 'l'
    | 'xl'
    | 'xxl';

const TileSizes: Record<
    TileSize,
    {
        width: number;
        height: number;
        padding: number;
        titleFontSize: number;
        descriptionFontSize: number;
        iconSize: number;
        borderRadius: number;
    }
> = {
    xxs: {
        width: 120,
        height: 120,
        padding: 1,
        titleFontSize: 12,
        descriptionFontSize: 9,
        iconSize: 24,
        borderRadius: 2,
    },

    xs: {
        width: 180,
        height: 150,
        padding: 1.5,
        titleFontSize: 15,
        descriptionFontSize: 11,
        iconSize: 30,
        borderRadius: 2,
    },

    s: {
        width: 220,
        height: 180,
        padding: 2,
        titleFontSize: 18,
        descriptionFontSize: 12,
        iconSize: 38,
        borderRadius: 3,
    },

    m: {
        width: 280,
        height: 220,
        padding: 2.5,
        titleFontSize: 22,
        descriptionFontSize: 14,
        iconSize: 48,
        borderRadius: 3,
    },

    l: {
        width: 360,
        height: 240,
        padding: 3,
        titleFontSize: 24,
        descriptionFontSize: 15,
        iconSize: 56,
        borderRadius: 3,
    },

    xl: {
        width: 420,
        height: 260,
        padding: 3,
        titleFontSize: 28,
        descriptionFontSize: 16,
        iconSize: 64,
        borderRadius: 4,
    },

    xxl: {
        width: 520,
        height: 300,
        padding: 3.5,
        titleFontSize: 32,
        descriptionFontSize: 18,
        iconSize: 72,
        borderRadius: 4,
    },
};

export interface AppTileProps {
    title: string;
    description: string;
    icon: ReactNode;
    href: string;
    size?: TileSize;
    disabled?: boolean;
}

export default function AppTile({
    title,
    description,
    icon,
    href,
    size = 'm',
    disabled = false,
}: AppTileProps) {
    const {
        width,
        height,
        padding,
        titleFontSize,
        descriptionFontSize,
        iconSize,
        borderRadius,
    } = TileSizes[size];

    const showDescription = !['xxs', 'xs'].includes(size);

    return (
        <Card
            elevation={2}
            sx={{
                width,
                height,
                borderRadius,
                overflow: 'hidden',
                transition: 'all .25s ease',
                opacity: disabled ? 0.55 : 1,

                '&:hover': {
                    transform: disabled ? 'none' : 'translateY(-4px)',
                    boxShadow: disabled ? 2 : 8,
                },
            }}
        >
            <Link
                href={href}
                style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'block',
                    height: '100%',
                    pointerEvents: disabled ? 'none' : 'auto',
                }}
            >
                <CardActionArea
                    sx={{
                        height: '100%',
                    }}
                >
                    <CardContent
                        sx={{
                            p: padding,
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: titleFontSize,
                                fontWeight: 600,
                                lineHeight: 1.2,
                                wordBreak: 'break-word',
                            }}
                        >
                            {title}
                        </Typography>

                        {showDescription && (
                            <Typography
                                color="text.secondary"
                                sx={{
                                    mt: 1,
                                    flexGrow: 1,
                                    fontSize: descriptionFontSize,
                                    lineHeight: 1.35,
                                    overflow: 'hidden',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: 'vertical',
                                }}
                            >
                                {description}
                            </Typography>
                        )}

                        <Box
                            sx={{
                                mt: showDescription ? 'auto' : 2,
                                display: 'flex',
                                justifyContent:
                                    size === 'xxs'
                                        ? 'center'
                                        : 'flex-start',
                                alignItems: 'center',
                                color: 'primary.main',

                                '& svg': {
                                    fontSize: iconSize,
                                },
                            }}
                        >
                            {icon}
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    );
}